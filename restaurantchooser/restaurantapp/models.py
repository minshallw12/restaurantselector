from django.db import models

# Create your models here.
class Restaurants(models.Model):
    name = models.CharField()
    type1 = models.CharField()
    type2 = models.CharField()
    cost = models.CharField()
    
