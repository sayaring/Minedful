from django.urls import path
from . import views

urlpatterns = [
    #path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/signup/', views.signup, name='signup'),
    path('api/login/', views.user_login, name='user_login'),
    path('upload/', views.upload_file, name='upload_file'),
]
