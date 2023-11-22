from django.urls import path
from . import views

urlpatterns = [
    path('report/', views.upload_file, name='upload_file'),
]
