from logging import raiseExceptions
from django.shortcuts import render
from .models import FriendList
from rest_framework.decorators import api_view
from .ser import FriendListSer
from rest_framework.response import Response
# Create your views here.


@api_view(['POST','GET'])
def Friend_list(request):
    if request.method == 'POST':
        obj = FriendListSer(data = request.data)
        obj.is_valid(raise_exception=True)
        obj.save()
        return Response({"mesage":"done"})
    if request.method == 'GET':
        obj = FriendList.objects.all()
        sera = FriendListSer(obj,many=True)
        return Response(sera.data)
        

