
from enum import unique
from django.db import models
from accounts.models import User
from datetime import datetime
# Create your models here.
class FriendList(models.Model):
    user_one =models.ForeignKey(User,on_delete=models.CASCADE,related_name="user_one",default=None)
    user_two =models.ForeignKey(User,on_delete=models.CASCADE,related_name="user_two",default=None)
    is_block =models.BooleanField(default=False)

    def __str__(self):
        return str(self.user_one)
    class Meta:
        unique_together = ['user_one','user_two']


class Chats(models.Model):
    sent_by = models.ForeignKey(User,on_delete=models.CASCADE,related_name="sender",default=None)
    sent_to = models.ForeignKey(User,on_delete=models.CASCADE,related_name="receiver",default=None)
    message = models.TextField(max_length=10000)
    is_recevied = models.BooleanField(default=False)
    is_read = models.BooleanField(default=False)
    message_sent_time =  models.DateTimeField(auto_now_add=True)

