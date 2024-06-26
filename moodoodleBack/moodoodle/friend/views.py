# friend views.py
from user.models import users
from diary.models import Diary
from .models import Friend
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import FriendSerializer, FriendListSerializer, FriendRequestSerializer, FriendCalendarSerializer
from calendar import monthrange
from datetime import date, timedelta

class FriendListView(ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = FriendListSerializer

    def get_queryset(self):
        from_user_id = self.kwargs.get('from_user_id')
        user = users.objects.get(id=from_user_id)
        user_friends = Friend.objects.filter(from_user_id=user.user_id) or Friend.objects.filter(to_user_id=user.user_id)
        friends_list = []

        for friends in user_friends:
            if Friend.objects.filter(to_user_id=friends.from_user_id, from_user_id=friends.to_user_id).exists():
                friends_list.append(friends.to_user_id)
        return users.objects.filter(user_id__in=friends_list)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        response = {
            'success': True,
            'status_code': status.HTTP_200_OK,
            'message': '요청에 성공하였습니다.',
            'result': serializer.data
        }
        return Response(response, status=status.HTTP_200_OK)

class FriendSearchView(RetrieveAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = FriendListSerializer
    lookup_field = 'id'

    def get_object(self):
        queryset = users.objects.all()
        id_kwargs = {self.lookup_field: self.kwargs[self.lookup_field]}
        obj = queryset.filter(**id_kwargs).first()
        if not obj:
            raise ValueError('유저가 존재하지 않습니다.')
        return obj
    
    def get(self, request, *args, **kwargs):
        try:
            obj = self.get_object()
            serializer = self.serializer_class(obj)
            response = {
                'success': True,
                'status_code': status.HTTP_200_OK,
                'message': '요청에 성공하였습니다.',
                'id': serializer.data.get('id'),
                'nickname': serializer.data.get('nickname'),
                'profile_image': serializer.data.get('profile_image'),
                'description': serializer.data.get('description')
            }
            return Response(response, status=status.HTTP_200_OK)
        except ValueError as e:
            response = {
                'success' : False,
                'status_code': status.HTTP_404_NOT_FOUND,
                'message': str(e)
            }
            return Response(response, status=status.HTTP_404_NOT_FOUND)

class FriendAddView(CreateAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = FriendSerializer

    def post(self, request, *args, **kwargs):
        from_user_id = self.kwargs.get('from_user_id')
        to_user_id = self.kwargs.get('to_user_id')
        from_user = users.objects.get(id=from_user_id)
        
        try:
            to_user = users.objects.get(id=to_user_id)
        except users.DoesNotExist:
            response = {
                'success': False,
                'status_code': status.HTTP_404_NOT_FOUND,
                'message': '유저를 찾을 수 없습니다.'
            }
            return Response(response, status=status.HTTP_404_NOT_FOUND)
        
        if from_user_id == to_user_id:
            response = {
                'success': False,
                'status_code': status.HTTP_400_BAD_REQUEST,
                'message': '자신에게 친구 요청을 할 수 없습니다.'
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

        if Friend.objects.filter(from_user_id=from_user.user_id, to_user_id=to_user.user_id).exists() and Friend.objects.filter(from_user_id=to_user.user_id, to_user_id=from_user.user_id).exists():
            response = {
                'success': False,
                'status_code': status.HTTP_400_BAD_REQUEST,
                'message': '이미 친구 관계가 설정되어 있습니다.'
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
        
        if Friend.objects.filter(from_user_id=from_user.user_id, to_user_id=to_user.user_id).exists():
            response = {
                'success': False,
                'status_code': status.HTTP_400_BAD_REQUEST,
                'message': '이미 친구 신청을 보냈습니다.'
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
        
        if Friend.objects.filter(from_user_id=to_user.user_id, to_user_id=from_user.user_id).exists():
            response = {
                'success': False,
                'status_code': status.HTTP_400_BAD_REQUEST,
                'message': '상대방이 이미 친구 신청을 보냈습니다.'
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

        friend = {'from_user': from_user.user_id, 'to_user': to_user.user_id}
        serializer = self.serializer_class(data=friend)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response = {
            'success': True,
            'status_code': status.HTTP_201_CREATED,
            'message': '요청에 성공하였습니다.'
        }
        return Response(response, status=status.HTTP_201_CREATED)

class FriendDeleteView(DestroyAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = FriendSerializer

    def delete(self, request, *args, **kwargs):
        from_user_id = self.kwargs.get('from_user_id')
        to_user_id = self.kwargs.get('to_user_id')
        from_user = users.objects.get(id=from_user_id)
        to_user = users.objects.get(id=to_user_id)

        try:
            friends1 = Friend.objects.get(from_user=from_user, to_user=to_user)
            friends2 = Friend.objects.get(from_user=to_user, to_user=from_user)
        except Friend.DoesNotExist:
            response = {
                'success' : False,
                'status_code': status.HTTP_404_NOT_FOUND,
                'message': '유저를 찾을 수 없습니다.',
            }
            return Response(response, status=status.HTTP_404_NOT_FOUND)
        
        friends1.delete()
        friends2.delete()
        response = {
            'success': True,
            'status_code': status.HTTP_204_NO_CONTENT,
            'message': '요청에 성공하였습니다.'
        }
        return Response(response, status=status.HTTP_204_NO_CONTENT)

class FriendCalendarView(ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = FriendCalendarSerializer

    def get_queryset(self):
        from_user_id = self.kwargs.get('from_user_id')
        to_user_id = self.kwargs.get('to_user_id')
        from_user = users.objects.get(id=from_user_id)
        year = int(self.kwargs.get('year'))
        month = int(self.kwargs.get('month'))
        start_date = date(year, month, 1)
        end_date = date(year, month, monthrange(year, month)[1])
        current_date = date.today()

        try:
            to_user = users.objects.get(id=to_user_id)
        except users.DoesNotExist:
            raise ValueError("유저를 찾을 수 없습니다.")
        
        if not Friend.objects.filter(from_user_id=from_user.user_id, to_user_id=to_user.user_id).exists():
            raise ValueError("친구 관계가 아닙니다.")

        if not to_user.public:
            raise ValueError("친구의 달력이 공개되어 있지 않습니다.")
        
        if date(year, month, 1) > current_date:
            raise ValueError("접근 불가능한 날짜입니다.")

        return Diary.objects.filter(date__range=(start_date, end_date), user_id=to_user.user_id)

    def list(self, request, *args, **kwargs):
        try:    
            queryset = self.get_queryset()
            results = []
            year = int(self.kwargs.get('year'))
            month = int(self.kwargs.get('month'))
            start_date = date(year, month, 1)
            end_date = date(year, month, monthrange(year, month)[1])
            current_date = start_date

            while current_date <= end_date:
                diary = queryset.filter(date=current_date).first()
                if diary:
                    serializer = self.serializer_class(diary)
                    results.append(serializer.data)
                else:
                    results.append({
                        'diary_id': None,
                        'date': current_date.isoformat(),
                        'content': None,
                        'main_mood_color': None
                    })
                current_date += timedelta(days=1)

        except ValueError as e:
            response = {
                'success': False,
                'status_code': status.HTTP_400_BAD_REQUEST,
                'message': str(e)
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

        response = {
            'success': True,
            'status_code': status.HTTP_200_OK,
            'message': '요청에 성공하였습니다.',
            'result': results
        }
        return Response(response, status=status.HTTP_200_OK)

class FriendRequestView(ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = FriendRequestSerializer

    def get_queryset(self):
        from_user_id = self.kwargs.get('from_user_id')

        try:
            from_user = users.objects.get(id=from_user_id)
        except users.DoesNotExist:
            return Friend.objects.none()
        
        friend_list = Friend.objects.filter(to_user=from_user)
        friends_request = friend_list.exclude(from_user__in=Friend.objects.filter(from_user=from_user).values('to_user'))
        return friends_request
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        response = {
            'success': True,
            'status_code': status.HTTP_200_OK,
            'message': '요청에 성공하였습니다.',
            'result': serializer.data
        }
        return Response(response, status=status.HTTP_200_OK)

class FriendAcceptView(CreateAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = FriendSerializer

    def post(self, request, *args, **kwargs):
        from_user_id = self.kwargs.get('from_user_id')
        to_user_id = self.kwargs.get('to_user_id')
        from_user = users.objects.get(id=from_user_id)
        to_user = users.objects.get(id=to_user_id)

        try:
            if Friend.objects.filter(from_user=from_user, to_user=to_user).exists() and Friend.objects.filter(from_user=to_user, to_user=from_user).exists():
                response = {
                    'success': False,
                    'status_code': status.HTTP_400_BAD_REQUEST,
                    'message': '이미 친구 관계가 설정되어 있습니다.'
                }
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

            Friend.objects.get(from_user_id=from_user.user_id, to_user_id=to_user.user_id)
            friend_data = {'from_user': to_user.user_id, 'to_user': from_user.user_id}
            serializer = self.serializer_class(data=friend_data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            response = {
                'success': True,
                'status_code': status.HTTP_200_OK,
                'message': '친구 신청을 수락하였습니다.'
            }
            return Response(response, status=status.HTTP_200_OK)
        except Friend.DoesNotExist:
            response = {
                'success': False,
                'status_code': status.HTTP_404_NOT_FOUND,
                'message': '친구 신청을 찾을 수 없습니다.'
            }
            return Response(response, status=status.HTTP_404_NOT_FOUND)

class FriendRejectView(DestroyAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = FriendSerializer
    queryset = Friend.objects.all()

    def delete(self, request, *args, **kwargs):
        from_user_id = self.kwargs.get('from_user_id')
        to_user_id = self.kwargs.get('to_user_id')
        from_user = users.objects.get(id=from_user_id)
        to_user = users.objects.get(id=to_user_id)
        
        try:
            friend = Friend.objects.get(from_user_id=from_user.user_id, to_user_id=to_user.user_id)
            friend.delete()
            response = {
                'success': True,
                'status_code': status.HTTP_204_NO_CONTENT,
                'message': '친구 신청을 거절하였습니다.'
            }
            return Response(response, status=status.HTTP_204_NO_CONTENT)
        except Friend.DoesNotExist:
            response = {
                'success': False,
                'status_code': status.HTTP_404_NOT_FOUND,
                'message': '친구 신청을 찾을 수 없습니다.'
            }
            return Response(response, status=status.HTTP_404_NOT_FOUND)