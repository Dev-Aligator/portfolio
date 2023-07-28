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

    def __str__(self):
        return self.roleName

class Skill(models.Model):
    skillPercentage = models.PositiveSmallIntegerField(default=90)
    stopColor1 = models.CharField(max_length=20, null=True, blank=True)
    stopColor2 = models.CharField(max_length=20, null=True, blank=True)    
    skillName = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.skillName

class Project(models.Model):
    title = models.CharField(max_length=200, unique=True)
    description = models.CharField(max_length=200)
    imgUrl = models.ImageField(upload_to="images/")
    tabIndex = models.PositiveSmallIntegerField(default=1)
    
    def __str__(self):
        return self.title
