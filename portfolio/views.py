from django.shortcuts import render
from .models import Project


def index(request):
    projects = Project.objects.all()
    context = {
        'projects': projects,
    }
    return render(request, 'portfolio/index.html', context)

def about(request):
    return render(request, 'portfolio/about.html')