from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/',views.Friend_list,name ="Friend_list"),
]
