from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/',views.Friend_list,name ="Friend_list"),
    path('message/<int:pk>/',views.getChats,name = "getChats"),
    path('friends/<str:username>',views.getUser,name = "getUser"),
]
