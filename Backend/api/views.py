from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Banner, Role
from .serializers import BannerSerializer

@api_view(['GET'])
def getBannerData(request):
    banner = Banner.objects.first()
    serializer = BannerSerializer(banner)
    return Response(serializer.data)


