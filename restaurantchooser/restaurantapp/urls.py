from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('restaurantForm/', views.index, name='restaurant_form'),
    path('addRestaurant/', views.add_restaurant, name="add_restaurant"),
    path('selector/', views.index, name='selector'),
]
