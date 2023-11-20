from django.urls import path, include
from rest_framework import routers
from fitness_app import views

urlpatterns = [
    path('', views.test, name='test')
]