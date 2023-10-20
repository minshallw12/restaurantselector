from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('addrestaurant', views.index,name='addrestaurant'),
    path('selector', views.index, name='selector'),
]
