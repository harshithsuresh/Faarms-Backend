
from import_export import resources
from .models import Student
import time

class StudentResource(resources.ModelResource):
    class Meta:
        model = Student
        import_id_fields = ('ID',)
        exclude = ('id',)
        export_order = ('registrationNumber', 'firstName', 'lastName', 'gender', 'dateOfAdmission', 'createdData', 'lastModifiedData')

    def before_import_row(self, row, **kwargs):
        row['ID'] = row['firstName'][0]+row['lastName'][0]+str(int(time.mktime(row['dateOfAdmission'].timetuple())))
        return super(StudentResource, self).before_import_row(row, **kwargs)        