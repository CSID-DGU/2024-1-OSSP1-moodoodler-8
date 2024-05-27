from django.shortcuts import render, get_object_or_404

from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from . import serializers
from .models import Diary_Mood
from user.models import users
from .serializers import serializers, DiaryMoodCreateSerializer
# from .kobert.result import predict
from .tests import dummy_mood

# Create your views here.
class DiaryMoodCreateView(CreateAPIView):
    serializer_class = DiaryMoodCreateSerializer
    permission_classes = [IsAuthenticated]
    queryset = Diary_Mood.objects.all()
    def get_object(self):
        diary_id = self.kwargs.get('pk')
        return get_object_or_404(Diary_Mood, diary_id=diary_id)

    def get(self, request, *args, **kwargs):
        mood = self.get_object()
        try:
            serializer = DiaryMoodCreateSerializer(mood)
            return Response({
                'success': True,
                'status_code': status.HTTP_200_OK,
                'message': "요청에 성공하였습니다.",
                'data' : serializer.data
            }, status=status.HTTP_200_OK)
        except Diary_Mood.DoesNotExist:
            return Response({
                'success': False,
                'status_code': status.HTTP_400_BAD_REQUEST,
                'message': "분석되지 않은 일기입니다."
            }, status=status.HTTP_400_BAD_REQUEST)
        
    def create(self, request, diary_id, *args, **kwargs):
        # serializer = self.get_serializer(data=request.data)
        # mood_data = predict(request.data.get('content'))
        mood_data = dummy_mood(request.data.get('content'))
        color = ['DBD3FB','FEF4A0','FF9191','B5D3FF','B3F4B2','FBCFE0','FECFAD']
        mood = Diary_Mood.objects.create_mood(diary_id = diary_id,
                                              fear=mood_data[0],
                                              surprised=mood_data[1],
                                              anger=mood_data[2],
                                              sad=mood_data[3],
                                              normal=mood_data[4],
                                              happy=mood_data[5],
                                              aversion=mood_data[6],
                                              color="dummy")