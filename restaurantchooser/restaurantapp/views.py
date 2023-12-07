from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.db.models import Q
from django.forms.models import model_to_dict
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


@api_view(['GET'])
def get_filtered_restaurants(request):
    choice1 = request.data["choice1"]
    choice2 = request.data["choice2"]
    type1_list = Restaurants.objects.filter(Q(type1 = choice1) | Q(type1 = choice2))
    type2_list = Restaurants.objects.filter(Q(type2 = choice1) | Q(type2 = choice2))

    big_list = []
    for item in type1_list:
        data = model_to_dict(item)
        big_list.append(tuple(data.items()))
    for item in type2_list:
        data = model_to_dict(item)
        big_list.append(tuple(data.items()))

    print(big_list)
  
    final_list = [dict(item) for item in set(big_list)]
    # print(final_list)

    return JsonResponse({"restaurants": final_list})

@api_view(['DELETE'])
def delete_restaurant(request, id):
    try:
        Restaurants.objects.filter(id=id).delete()
        return JsonResponse({'success':True})
    except Exception as e:
        print(e)
        return JsonResponse({'sucess':False})