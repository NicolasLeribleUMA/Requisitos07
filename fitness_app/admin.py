from django.contrib import admin

from .models import *


class ClientAdmin(admin.ModelAdmin):
    fieldsets = [
        ('User', {'fields': ['user']}),
        ('Trainer', {'fields': ['trainer']}),
    ]


class TrainerAdmin(admin.ModelAdmin):
    fieldsets = [
        ('User', {'fields': ['user']}),
        ('Category', {'fields': ['category']}),
    ]


class RoutineAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Objective', {'fields': ['objective']}),
        ('Client', {'fields': ['client']}),
        ('Trainer', {'fields': ['trainer']}),
    ]


class TrainingSessionAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Repetitions', {'fields': ['rep']}),
        ('Sets', {'fields': ['sets']}),
        ('Exercise', {'fields': ['exercise']}),
    ]


class RatingInLine(admin.TabularInline):
    model = Rating
    extra = 1


class ExerciseAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Name', {'fields': ['name']}),
        ('Description', {'fields': ['desc']}),
        ('Type', {'fields': ['type']}),
        ('Video URL', {'fields': ['videoURL']}),
        ('Is Private?', {'fields': ['isPrivate']}),
        ('Trainer', {'fields': ['trainer']}),
    ]
    inlines = [RatingInLine]


admin.site.register(Client, ClientAdmin)
admin.site.register(Trainer, TrainerAdmin)
admin.site.register(Routine, RoutineAdmin)
admin.site.register(TrainingSession, TrainingSessionAdmin)
admin.site.register(Exercise, ExerciseAdmin)
