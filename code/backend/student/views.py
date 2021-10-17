from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from student.serializer import StudentListSerializer
from student.models import Student
from rest_framework import status

@api_view(['GET'])
def getStudentList(request):
    sortingType=request.GET.get('sorting')
    if 'firstName' in sortingType:
        studentList =Student.objects.order_by(sortingType)
    elif 'dateOfAdmission' in sortingType:
        studentList =Student.objects.order_by(sortingType)
    else:
        detail={'messages':'Invalid sorting options'}
        return Response(detail,status=status.HTTP_400_BAD_REQUEST)
    serializer=StudentListSerializer(studentList,many=True)
    return Response(serializer.data)