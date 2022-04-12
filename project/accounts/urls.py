from django.urls import path
from .views import MyTokenObtainPairView
from . import views
from django.conf.urls.static import static
from django.conf import settings


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', MyTokenObtainPairView.as_view(), name='MyTokenObtainPairView'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/',views.signup,name = "signup"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)