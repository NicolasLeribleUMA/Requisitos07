from rest_framework import serializers
from .models import *
from django.forms.models import model_to_dict


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'


class TrainingSessionSerializer(serializers.ModelSerializer):
    exercise = ExerciseSerializer(many=False, allow_null=False)

    class Meta:
        model = TrainingSession
        fields = '__all__'


class RoutineSerializer(serializers.ModelSerializer):
    trainingSessions = TrainingSessionSerializer(many=True, allow_null=True)

    class Meta:
        model = Routine
        fields = '__all__'


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

