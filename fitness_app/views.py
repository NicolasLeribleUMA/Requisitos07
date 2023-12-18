from django.http import JsonResponse

from fitness_app.aux_func import response
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.forms.models import model_to_dict
from fitness_app.models import *
from fitness_app.serializer import *

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        isTrainer = hasattr(user, "trainer")
        return Response({
            'token': token.key,
            'username': user.username,
            'isTrainer': isTrainer
        })


@api_view(('GET',))
@permission_classes([IsAuthenticated])
def logout(request):
    request.user.auth_token.delete()
    return response("Se ha cerrado correctamente la sesión", status.HTTP_200_OK)


@api_view(('GET',))
@permission_classes([IsAuthenticated])
def test(request):
    return JsonResponse({
        "name": "Fitness Well-Being"
    })


@permission_classes([IsAuthenticated])
class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()


@permission_classes([IsAuthenticated])
class TrainerView(viewsets.ModelViewSet):
    serializer_class = TrainerSerializer
    queryset = Trainer.objects.all()


@api_view(('GET',))
@permission_classes([IsAuthenticated])
def trainerGetID(request):
    trainer = Trainer.objects.get(user=request.user)
    data = {'trainerID': trainer.pk}
    return Response(data, status=status.HTTP_200_OK)

@permission_classes([IsAuthenticated])
class ExerciseView(viewsets.ModelViewSet):
    serializer_class = ExerciseSerializer
    queryset = Exercise.objects.all()


@permission_classes([IsAuthenticated])
class TrainingSessionView(viewsets.ModelViewSet):
    serializer_class = TrainingSessionSerializer
    queryset = TrainingSession.objects.all()


@permission_classes([IsAuthenticated])
class RoutineView(viewsets.ModelViewSet):
    serializer_class = RoutineSerializer
    queryset = Routine.objects.all()


@permission_classes([IsAuthenticated])
class RatingView(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()


@permission_classes([IsAuthenticated])
class AppointmentView(viewsets.ModelViewSet):
    serializer_class = AppointmentSerializer
    queryset = Appointment.objects.all()

