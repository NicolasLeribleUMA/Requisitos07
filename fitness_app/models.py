from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
from datetime import datetime


class Trainer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=30)

    def __str__(self):
        return str(self.user.username)


class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    weight = models.IntegerField(default=0)
    imc = models.IntegerField(default=0)
    measureDate = models.DateTimeField(default=datetime.now, blank=True)
    objective = models.CharField(max_length=200, default='')
    trainer = models.ForeignKey(Trainer, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return str(self.user.username)


class Exercise(models.Model):

    class Type(models.TextChoices):
        NOT_SPECIFIED = 'N', _("General")
        CHEST = 'C', _("Pecho")
        BACK = 'B', _("Espalda")
        ARMS = 'A', _("Brazos")
        SHOULDERS = 'S', _("Hombros")
        LEGS = 'L', _("Piernas")

    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=300)
    type = models.CharField(max_length=1, choices=Type.choices, default=Type.NOT_SPECIFIED)
    videoURL = models.CharField(max_length=100)
    isPrivate = models.BooleanField(default=True)
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.name)


class TrainingSession(models.Model):
    rep = models.IntegerField(default=0)
    sets = models.IntegerField(default=0)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.exercise.name}: {self.rep} repeticiones, {self.sets} series"


class Routine(models.Model):
    objective = models.CharField(max_length=200)
    client = models.OneToOneField(Client, on_delete=models.SET_NULL, null=True)
    trainer = models.OneToOneField(Trainer, on_delete=models.CASCADE)
    trainingSessions = models.ManyToManyField(TrainingSession)

    def __str__(self):
        return f"Rutina de {self.client.user.username}"


class Rating(models.Model):
    rating = models.BooleanField
    comment = models.CharField(max_length=300)
    client = models.OneToOneField(Client, on_delete=models.CASCADE)
    exercise = models.OneToOneField(Exercise, on_delete=models.CASCADE)

    def __str__(self):
        return f"Valoración {self.exercise.name} de {self.client}: {self.rating}"


class Appointment(models.Model):
    date = models.DateField
    client = models.OneToOneField(Client, on_delete=models.CASCADE)
    trainer = models.OneToOneField(Trainer, on_delete=models.CASCADE)

    def __str__(self):
        return f"Cita con {self.client.user.username} el día {self.date}"