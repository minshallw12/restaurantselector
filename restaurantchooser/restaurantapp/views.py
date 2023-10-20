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
        print(e, "Failed to post new restaurant")
        return JsonResponse({"success": False})
    
@api_view(['GET'])
def get_restaurants(request):
    try:
        restaurants = list(Restaurants.objects.all().values())
        return JsonResponse({'restaurants': restaurants})
    except Exception as e:
        print(e, "Failed to get restaurants list")
