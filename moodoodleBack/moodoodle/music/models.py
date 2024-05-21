# music models.py
from django.db import models

class Music(models.Model):
    music_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    artist = models.CharField(max_length=20)
    genre = models.CharField(max_length=20)
    cover = models.CharField(max_length=50, blank=True)

    class Meta:
        db_table = 'music'