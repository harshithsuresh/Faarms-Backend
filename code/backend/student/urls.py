
from django.urls import path
from  student import views
urlpatterns = [
    path('getStudentList/',views.getStudentList,name='getStudentList'),
]
                