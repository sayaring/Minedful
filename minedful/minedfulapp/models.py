from djongo import models

class User(models.Model):
    user_id = models.IntegerField(primary_key= True)
    password = models.CharField(max_length= 50)
    email_id = models.CharField(max_length= 50)
    username = models.CharField(max_length= 50)

class Report(models.Model):
    user_id = models.CharField(max_length= 255)
    report_json = models.TextField()

