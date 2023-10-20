from django.db import models

# Create your models here.
class Restaurants(models.Model):
    name = models.CharField(max_length=254)
    type1 = models.CharField(max_length=254)
    type2 = models.CharField(max_length=254)
    cost = models.BigIntegerField()
    
    def __str__(self) -> str:
        return f"{self.name} | Dunder"