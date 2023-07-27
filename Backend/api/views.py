from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Banner, Skill
from .serializers import BannerSerializer, SkillSerializer

@api_view(['GET'])
def getBannerData(request):
    banner = Banner.objects.first()
    serializer = BannerSerializer(banner)
    return Response(serializer.data)


@api_view(['GET'])
def getSkillsData(request):
    skills = Skill.objects.all()
    serializer = SkillSerializer(skills, many=True)
    return Response(serializer.data)