from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .models import *
import json

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

# This function serializes the data to return an object
class CustomEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Restaurants):
            return {
                "name": obj.name, 
                "type1": obj.type1, 
                "type2": obj.type2, 
                "cost": obj.cost
            }
        return super().default(obj)

@api_view(['GET'])
def get_restaurant_details(request, id):
    try:
        restaurant = Restaurants.objects.get(id = id)
        print(restaurant, "I'm here")
        json_data = json.dumps(restaurant, cls=CustomEncoder)
        print(json_data, "here")
        return JsonResponse({"data":json_data}, safe=False)
    except Exception as e:
        print(e, "Failed to get restaurant details")

@api_view(['DELETE'])
def delete_restaurant(request, id):
    try:
        Restaurants.objects.filter(id=id).delete()
        return JsonResponse({'success':True})
    except Exception as e:
        print(e)
        return JsonResponse({'sucess':False})