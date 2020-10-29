from django.urls import path
from .views import IdeaHelp, LeanCanvas

urlpatterns = [
    path('home/', IdeaHelp.as_view()),
    path('leancanvas/', LeanCanvas.as_view(), name='leancanvas'),
]