from django.db import models

# Create your models here.
class Restaurants(models.Model):
    name = models.CharField(max_length=254, null=False)
    type1 = models.CharField(max_length=254, null=False)
    type2 = models.CharField(max_length=254, blank=True)
    type3 = models.CharField(max_length=254, blank=True)
    cost = models.CharField(max_length=4)
    
    def __str__(self) -> str:
        return f"{self.name} | Dunder"