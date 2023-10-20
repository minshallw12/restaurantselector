from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .models import *

# Create your views here.
def index(request):
    return HttpResponse(open('static/index.html'))

@api_view(['POST'])
def add_restaurant(request):
    name = request.data['name']
    type1 = request.data['type1']
    type2 = request.data['type2']
    cost = request.data['cost']
    print(name,type1,type2,cost)
    
    try:
        # creates new restaurant
        new_restaurant = Restaurants.objects.create(name=name, type1=type1, type2=type2, cost=cost)
        new_restaurant.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
