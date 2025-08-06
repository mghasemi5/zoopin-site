from rest_framework.routers import DefaultRouter
from .views import PartnerViewSet, InsightViewSet, UserViewSet

router = DefaultRouter(trailing_slash=False)
router.register(r'partners', PartnerViewSet)
router.register(r'insights', InsightViewSet)
router.register(r'users', UserViewSet)

urlpatterns = router.urls
