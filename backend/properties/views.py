from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from properties.services.functions import get_provider_1_data,  get_provider_2_data
from properties.services.utils import normalize_data

def property_view(request):
    address = request.GET.get('address')

    if not address:
        return JsonResponse({"error": "Address is required"}, status=400)

    data = {
       "providers": {
            "Provider 1": {
                "Normalized Address":address,
                "Square Footage": 2165,
                "Lot Size (Acres)": 0.43,
                "Year Built": 1975,
                "Property Type": "Townhouse",
                "Bedrooms": 2,
                "Bathrooms": 2,
                "Room Count": 5,
                "Septic System": "Yes",
                "Sale Price": 350000,
            },
            "Provider 2": {
                "Normalized Address":address,
                "Square Footage": 2165,
                "Lot Size (Acres)": 0.43,
                "Year Built": 1975,
                "Property Type": "Townhouse",
                "Bedrooms": 2,
                "Bathrooms": 2,
                "Room Count": 5,
                "Septic System": "Yes",
                "Sale Price": 350000
            }
        }
    }
    return JsonResponse(data)

# Create your views here.
def property_data_view(request):
    address = request.GET.get('address')
    print(address)

    if not address:
        return JsonResponse({"error": "Address is required"}, status=400)
    
    provider_1 = get_provider_1_data(address)
    print(provider_1['data'])
    provider_2 = get_provider_2_data(address)
    print(provider_2['data'])
    data = {
        'provider_1': normalize_data(provider_1['data']),
        'provider_2': normalize_data(provider_2['data'])
    }

    return JsonResponse(data)