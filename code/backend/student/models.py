from django.db import models

# Create your models here.

class Student(models.Model):
    ID=models.CharField(primary_key=True,max_length=100)
    registrationNumber=models.PositiveIntegerField()
    firstName=models.CharField(max_length=100)
    lastName=models.CharField(max_length=100)
    gender=models.CharField(max_length=10)
    dateOfAdmission=models.DateField()
    createdData=models.DateField()
    lastModifiedData=models.DateField(auto_now=True)
    def __str__(self):
        return str(self.ID)