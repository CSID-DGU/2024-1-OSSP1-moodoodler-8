# music urls.py
from django.urls import path
from .views import MusicCreateView, MusicMoodView, MusicListView

app_name ='music'

urlpatterns = [
    path('create/', MusicCreateView.as_view(), name='music'),
    path('recomand/<int:diary_id>/', MusicMoodView.as_view(), name='music_mood'),
    path('list/', MusicListView.as_view(), name='list'),
]