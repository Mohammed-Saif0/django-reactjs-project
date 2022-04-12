from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    profile_pic = models.ImageField(null = True,blank = True,default = 'default.jpg')
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    username = models.CharField(max_length=60,unique=True)
    email = models.EmailField(max_length=60,unique=True)
    password = models.CharField(max_length=100)
   
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []