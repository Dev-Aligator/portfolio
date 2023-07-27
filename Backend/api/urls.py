from django.urls import path
from . import views

urlpatterns = [
    path('get/banner/', views.getBannerData),
    path('get/skills/', views.getSkillsData),
]