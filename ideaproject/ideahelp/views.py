from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from .models import IdeaModel

class IdeaHelp(ListView):
    template_name = 'home.html'
    model = IdeaModel

class LeanCanvas(TemplateView):
    template_name = 'leancanvas.html'
    model = IdeaModel