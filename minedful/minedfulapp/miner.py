import pm4py 
from io import BytesIO
import boto3
from pm4py.algo.filtering.log.variants import variants_filter
from pm4py.algo.discovery.alpha import algorithm as alpha_miner
from pm4py.visualization.petri_net import visualizer as pn_visualizer


def report_data(file_path, user_id):
    log = pm4py.read_xes(file_path)
    case_arrival = pm4py.stats.get_case_arrival_average(log)
    rework = pm4py.stats.get_rework_cases_per_activity(log)
    case_duration_all = pm4py.stats.get_all_case_durations(log)
    case_duration_avg = sum(case_duration_all)/len(case_duration_all)
    log_start = pm4py.get_start_activities(log)
    log_end = pm4py.get_end_activities(log)
    variants = pm4py.stats.get_variants(log)
    value = list(variants.values())
    session = boto3.Session(
    aws_access_key_id='AKIAZ4DIQU2XAFOPNUPJ',
    aws_secret_access_key='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',
    region_name='ap-south-1'
    )
    s3 = session.client('s3')
    bucket_name = 'minedfulbucket'
    net, initial_marking, final_marking = alpha_miner.apply(log)
    parameters = {pn_visualizer.Variants.FREQUENCY.value.Parameters.FORMAT: "png"}
    gviz = pn_visualizer.apply(net, initial_marking, final_marking,
                            parameters=parameters,
                            variant=pn_visualizer.Variants.FREQUENCY,
                            log=log)
    image_path = f'tmp_{user_id}.png'
    gviz.save(image_path)

    s3_key = f'{user_id}/flowchart/image.png'  # Change the key where you want to store the image

    with open(image_path, 'rb') as file:
        s3.upload_fileobj(file, bucket_name, s3_key)

    # Get the S3 file path
    s3_file_path = f"https://{bucket_name}.s3.amazonaws.com/{s3_key}"  # S3 file URL

    data = {
        'case_arrival' : case_arrival,
        'rework' : rework,
        'case_duration_avg' : case_duration_avg,
        'log_start' : log_start,
        'log_end' : log_end,
        'trace_count' : len(value),
        'flowchart' : s3_file_path
    }
    return data


