from django.db import models
from djongo import models


class Report(models.Model):
    user_id = models.AutoField(primary_key= True)
    password = models.CharField(max_length= 50)
    variants = models.IntegerField()
    logs = models.IntegerField()
    case_arrival = models.DecimalField(max_digits=10, decimal_places=2)
    case_duration = models.DecimalField(max_digits=10, decimal_places=2)
    opening_activities = models.JSONField()
    ending_activities = models.JSONField()
    rework_activities = models.JSONField()
    
