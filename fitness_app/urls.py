from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.documentation import include_docs_urls
from fitness_app import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'clients', views.ClientView, 'clients')
router.register(r'trainers', views.TrainerView, 'trainers')
router.register(r'exercises', views.ExerciseView, 'exercises')
router.register(r'sessions', views.TrainingSessionView, 'sessions')
router.register(r'routines', views.RoutineView, 'routines')
router.register(r'ratings', views.ClientView, 'ratings')
router.register(r'appointments', views.ClientView, 'appointments')

urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Fitness Well Being API')),
    path('login', obtain_auth_token, name='login'),
    path('logout', views.logout, name='logout')
]