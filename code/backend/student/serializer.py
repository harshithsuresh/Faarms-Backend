from rest_framework.serializers import ModelSerializer
from student.models import Student

class StudentListSerializer(ModelSerializer):
    class Meta:
        model=Student
        fields='__all__'