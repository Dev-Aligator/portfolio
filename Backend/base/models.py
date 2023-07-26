from django.db import models

# Create your models here.

class Banner(models.Model):
    tagLine = models.CharField(max_length=200, default="Welcome to my Portfolio")
    plainText = models.CharField(max_length=500)
    created = models.DateTimeField(auto_now_add=True)

class Role(models.Model):
    roleName = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    banner = models.ForeignKey(Banner, on_delete=models.CASCADE, related_name="roles")



