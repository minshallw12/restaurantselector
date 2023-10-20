from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('restaurantForm/', views.index, name='restaurant_form'),
    path('restaurants/', views.index, name="restaurants"),
    path('addRestaurant/', views.add_restaurant, name="add_restaurant"),
    path('getRestaurants/', views.get_restaurants, name="get_restaurants"),
    path('restaurants/<int:id>', views.get_restaurant_details, name="get_restaurants"),
    path('selector/', views.index, name='selector'),
]
