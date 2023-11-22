# views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import tempfile
import json
import numpy as np
from .miner import report_data 
from .models import Report, User

@csrf_exempt
def upload_file(request):
    if request.method == 'POST':
        uploaded_file = request.FILES.get('file')  # Assuming the file is sent via POST request
        user_id = request.POST.get('user_id')
        if uploaded_file:
            temp_file = tempfile.NamedTemporaryFile(delete=False)  # Create a temporary file
            for chunk in uploaded_file.chunks():
                temp_file.write(chunk)
            temp_file.close()  
            report_data = generate_report(temp_file.name,user_id)
            data = json.dumps(report_data,default=convert_np_ints)
            report_instance = Report.objects.create(
                user_id = user_id,
                report_json = data  
            )
            report_instance.save()
            return JsonResponse(data, safe= False)  # Return report data as JSON response
        else:
            return JsonResponse({'error': 'File not uploaded'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt 
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        user_id = data.get('user_id')
        password = data.get('password')
        email_id = data.get('email_id')
        username = data.get('username')
        if user_id and password:
            print(user_id,username,password,email_id)
            existing_user = User.objects.filter(user_id=user_id).first()
            # Check if the user with the given username already exists
            if existing_user:
                return JsonResponse({'error': 'User_id already exists'}, status=400)

            # # Create a new user
            user_instance = User.objects.create(user_id=user_id, password=password, email_id=email_id, username=username)
            user_instance.save()

            return JsonResponse({'access_token': 'access_token'}, status=201)
        else:
            return JsonResponse({'error': 'Invalid data'}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))

        user_id = data.get('user_id')
        password = data.get('password')
        if user_id and password:
            # Check if the user exists
            user = User.objects.filter(user_id=user_id).first()
            if user is not None:
                if user.password == password:
                    # User authenticated successfully
                    # Return success response or perform necessary actions
                    return JsonResponse({'message': 'Sign-in successful'})
                else:
                    # Incorrect password
                    return JsonResponse({'error': 'Invalid password'}, status=400)
            else:
                # User does not exist
                return JsonResponse({'error': 'User does not exist'}, status=400)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)



def generate_report(file_path, user_id):
    report = report_data(file_path, user_id) 
    return report

def convert_np_ints(obj):
    if isinstance(obj, np.int64):
        return int(obj)
    return obj
