from dataclasses import field
import profile
from pyexpat import model
from rest_framework import serializers
from .models import FriendList,Chats
from accounts.models import User

class FriendListSer(serializers.ModelSerializer):
    class Meta:
        model = FriendList
        fields = "__all__"
        depth = 1

class ChatsSer(serializers.ModelSerializer):
    profile_pic_sent_by = serializers.ImageField(source='sent_by.profile_pic') 
    profile_pic_sent_to = serializers.ImageField(source='sent_to.profile_pic') 
    class Meta:
        model = Chats
        fields = ['sent_by','sent_to','message','is_recevied','is_read','profile_pic_sent_by','profile_pic_sent_to','message_sent_time']

class GetChatsSer(serializers.ModelSerializer):
    class Meta:
        model = Chats
        fields = '__all__'

class UserSer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['profile_pic','first_name','last_name','username','id']


class FriendRequestSer(serializers.ModelSerializer):
    class Meta:
        model = FriendList
        fields = "__all__"