from rest_framework.response import Response 
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializres 
# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['profile_pic'] = user.profile_pic.url
        token['username'] = user.username
        token['email'] = user.email
        token['first_name'] = user.first_name
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        obj = UserSerializres(data = request.data)
        obj.is_valid(raise_exception=True)
        obj.save()
        return Response(obj.data)

