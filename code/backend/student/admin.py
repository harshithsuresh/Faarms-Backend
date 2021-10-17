from django.contrib import admin
from .models import Student
from import_export.admin import ImportExportModelAdmin
from .resources import StudentResource

class StudentAdmin(ImportExportModelAdmin):
    resource_class = StudentResource
    list_display=('ID','registrationNumber','firstName','lastName','gender','dateOfAdmission')

admin.site.register(Student, StudentAdmin)
