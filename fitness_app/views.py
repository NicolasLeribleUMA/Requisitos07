from django.http import JsonResponse
from django.forms.models import model_to_dict

from fitness_app.aux_func import response
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


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
