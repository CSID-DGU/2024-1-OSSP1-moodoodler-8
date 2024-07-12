from django.db import models
from .models import Diary

class Book_Mapping(models.Model):
    book_mapping_id = models.AutoField(primary_key=True)
    diary_id = models.ForeignKey(Diary, on_delete=models.CASCADE, db_column='diary_id')


    class Meta:
        db_table = 'book_mapping'