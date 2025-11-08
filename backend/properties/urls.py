from django.urls import path
from .views import property_view
from .views import property_data_view

urlpatterns = [
    path('', property_data_view, name='property_view'),
]