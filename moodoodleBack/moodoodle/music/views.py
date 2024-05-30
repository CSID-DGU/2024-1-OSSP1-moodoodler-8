# music view.py
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from .serializers import MusicSerializer, MusicMooodSerializer
from .models import Music_Mood, Music
from diary_mood.models import Diary_Mood
from user.models import users, Survey
from sklearn.metrics.pairwise import cosine_similarity


class MusicCreateView(CreateAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = MusicSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MusicMoodView(CreateAPIView):
    serializer_class = MusicMooodSerializer

    # def get_object(self):
    #     music_id = self.kwargs.get('music_id')
    #     return get_object_or_404(Music_Mood, music_id=music_id)

    def get(self, request, *args, **kwargs):
        diary_id = self.kwargs.get('diary_id')
        id = self.kwargs.get('id')

        user = users.objects.get(id=id)
        diary_mood = Diary_Mood.objects.get(diary_id=diary_id)
        mood_colors = {
            "DBD3FB" : "negative",
            "FEF4A0" : "negative",
            "FF9191" : "negative",
            "B5D3FF" : "negative",
            "B3F4B2" : "positive",
            "FBCFE0" : "positive",
            "FECFAD" : "negative"
        }

        musics = []
        if diary_mood.color in mood_colors:
            surveys = Survey.objects.filter(user_id=user.user_id, question=mood_colors[diary_mood.color])
            for survey in surveys:
                musics.extend(Music.objects.filter(genre=survey.answer))

        if not musics:
            return Response({
                'success': False,
                'status_code': status.HTTP_404_NOT_FOUND,
                'message': "추천할 음악을 찾을 수 없습니다."
            }, status=status.HTTP_404_NOT_FOUND)

        diary_mood_values = list(Diary_Mood.objects.filter(diary_id=diary_id).values_list())
        diary = [mood[2:9] for mood in diary_mood_values]
        music_mood_values = list(Music_Mood.objects.values_list())
        ret = [mood[2:] for mood in music_mood_values]

        sim = cosine_similarity(diary, ret)
        sim_idx = []
        for i in range(min(len(sim[0]), len(musics))):
            music_data = MusicSerializer(musics[i]).data
            sim_idx.append({
                "similarity": sim[0][i],
                "music": music_data
            })
        sim_idx = sorted(sim_idx, key=lambda x: x["similarity"], reverse=True)

        return Response({
            "success" : True,
            "status_code" : 200,
            "message" : "요청에 성공하였습니다.",
            "diary_id" : diary_id,
            "recomand_music" : sim_idx[:10]
        }, status=status.HTTP_200_OK)
