from django.db import models
from djongo import models

class Activity(models.Model):
    name = models.CharField()
    frequency = models.IntegerField()

class Report(models.Model):
    user_id = models.AutoField(primary_key= True)
    password = models.CharField(max_length= 50)
    variants = models.IntegerField()
    logs = models.IntegerField()
    case_arrival = models.DecimalField()
    case_duration = models.DecimalField()
    trace_distribution = models.CharField()
    flowchart = models.CharField()
    opening_activities = models.ArrayField(model_container = Activity)
    ending_activities = models.ArrayField(model_container = Activity)
    rework_activities = models.ArrayField(model_container = Activity)
    
