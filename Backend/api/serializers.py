from rest_framework import serializers
from base.models import Banner, Role

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'

class BannerSerializer(serializers.ModelSerializer):
    roles = RoleSerializer(many=True, read_only=True)  # Include the related roles

    class Meta:
        model = Banner
        fields = '__all__'