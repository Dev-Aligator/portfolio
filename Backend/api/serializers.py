from rest_framework import serializers
from base.models import Banner, Role, Skill, Project

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'

class BannerSerializer(serializers.ModelSerializer):
    roles = RoleSerializer(many=True, read_only=True)  # Include the related roles

    class Meta:
        model = Banner
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'