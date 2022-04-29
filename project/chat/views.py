from .models import FriendList,Chats
from rest_framework.decorators import api_view
from .ser import FriendListSer,ChatsSer,GetChatsSer,UserSer
from rest_framework.response import Response
from accounts.models import User
# Create your views here.


@api_view(['POST','GET'])
def Friend_list(request,pk):
    if request.method == 'POST':
        obj = FriendListSer(data = request.data)
        obj.is_valid(raise_exception=True)
        obj.save()
        return Response({"mesage":"done"})
    if request.method == 'GET':
        obj = FriendList.objects.filter(user_one = pk) | FriendList.objects.filter(user_two = pk)
        sera = FriendListSer(obj,many=True)
        return Response(sera.data)


@api_view(['GET','POST'])
def getChats(request,pk):
    if request.method == 'GET':
        form =  Chats.objects.filter(sent_by = pk) | Chats.objects.filter(sent_to = pk).order_by("message_sent_time")
        ser = ChatsSer(form,many = True)
        return Response(ser.data)
    if request.method == 'POST':
        obj = GetChatsSer(data = request.data)
        obj.is_valid(raise_exception=True)
        obj.save()
        return Response({"mesage":"done"})



@api_view(['GET'])
def getUser(request,username):
    if request.method == 'GET':
        obj = User.objects.filter(username = username).first()
        ser = UserSer(obj,many = False)
        return Response(ser.data)  



        

