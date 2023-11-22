import pm4py 
from pm4py.algo.filtering.log.variants import variants_filter
def report_data(file_path):
    log = pm4py.read_xes(file_path)
    case_arrival = pm4py.stats.get_case_arrival_average(log)
    rework = pm4py.stats.get_rework_cases_per_activity(log)
    case_duration_all = pm4py.stats.get_all_case_durations(log)
    case_duration_avg = sum(case_duration_all)/len(case_duration_all)
    log_start = pm4py.get_start_activities(log)
    log_end = pm4py.get_end_activities(log)
    variants = pm4py.stats.get_variants(log)
    value = list(variants.values())
    data = {
        'case_arrival' : case_arrival,
        'rework' : rework,
        'case_duration_avg' : case_duration_avg,
        'log_start' : log_start,
        'log_end' : log_end,
        'trace_count' : len(value)
    }
    return data
