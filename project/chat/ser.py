from rest_framework import serializers
from .models import FriendList

class FriendListSer(serializers.ModelSerializer):
    class Meta:
        model = FriendList
        fields = "__all__"
