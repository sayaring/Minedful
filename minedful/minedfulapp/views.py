# views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import tempfile
import json
import numpy as np
from .miner import report_data 

@csrf_exempt
def upload_file(request):
    if request.method == 'POST':
        uploaded_file = request.FILES.get('file')  # Assuming the file is sent via POST request
        if uploaded_file:
            temp_file = tempfile.NamedTemporaryFile(delete=False)  # Create a temporary file
            for chunk in uploaded_file.chunks():
                temp_file.write(chunk)
            temp_file.close()  # Close the temporary file
            # Process the temporary file
            report_data = generate_report(temp_file.name)
            data = json.dumps(report_data,default=convert_np_ints)
            return JsonResponse(data, safe= False)  # Return report data as JSON response
        else:
            return JsonResponse({'error': 'File not uploaded'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def generate_report(file_path):
    report = report_data(file_path) 
    print("here")
    print (report)
    return report

def convert_np_ints(obj):
    if isinstance(obj, np.int64):
        return int(obj)
    return obj
