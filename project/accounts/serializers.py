
from pyexpat import model
from rest_framework import serializers
from .models import User

class UserSerializres(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = "__all__"

    
    def create(self,validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class profileSer(serializers.ModelSerializer):
    profile_pic = serializers.ImageField()
    class Meta:
        model = User
        fields = ['profile_pic']