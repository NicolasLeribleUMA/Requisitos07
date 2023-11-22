from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from fitness_app import views

urlpatterns = [
    path('', views.test, name='test'),
    path('login', obtain_auth_token, name='login'),
    path('logout', views.logout, name='logout')
]