from statistics import mode
from django.db import models
from accounts.models import User
# Create your models here.
class FriendList(models.Model):
    user_one =models.ForeignKey(User,on_delete=models.CASCADE,related_name="user_one",default=None)
    user_two =models.ForeignKey(User,on_delete=models.CASCADE,related_name="user_two",default=None)
    is_block =models.BooleanField(default="False")

