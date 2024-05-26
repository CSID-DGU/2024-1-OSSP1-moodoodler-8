# friend urls.py
from django.urls import path
from .views import FriendListView, FriendSearchView, FriendAddView, FriendDeleteView, FriendCalendarView, FriendRequestView, FriendAcceptView, FriendRejectView

app_name ='friend'

urlpatterns = [
    path('list/', FriendListView.as_view(), name='list'),
    path('search/<str:id>/', FriendSearchView.as_view(), name='search'),
    path('add/<str:to_user_id>/', FriendAddView.as_view(), name='add'),
    path('delete/<str:to_user_id>/', FriendDeleteView.as_view(), name='delete'),
    path('calendar/<str:to_user_id>/<int:year>/<int:month>/', FriendCalendarView.as_view(), name='calendar'),
    path('request/', FriendRequestView.as_view(), name='request'),
    path('accept/<str:from_user_id>/', FriendAcceptView.as_view(), name='accept'),
    path('reject/<str:from_user_id>/', FriendRejectView.as_view(), name='reject')
]