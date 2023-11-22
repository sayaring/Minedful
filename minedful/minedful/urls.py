
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('minedful/', include('minedfulapp.urls')),
]
