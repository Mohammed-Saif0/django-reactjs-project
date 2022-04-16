from django.urls import path
from . import views

urlpatterns = [
    path('',views.Friend_list,name ="Friend_list")
]
