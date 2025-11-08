from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from properties.services.functions import get_provider_1_data,  get_provider_2_data

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

def normalize_data(data):
    return {
        "id": data.get('id') if data.get('id') else data.get("ID"),
        "address":{
            "normalized": data.get("formattedAddress") if data.get("formattedAddress") else data.get("NormalizedAddress"),
            "line1": data.get("addressLine1") if data.get("addressLine1") else data.get("Address1"),
            "line2": data.get("addressLine2") if data.get('addressLine2') else  data.get("Address2"),
            "city": data.get('city') if data.get("city") else data.get("City"),
            "state": data.get("state") if data.get('city') else  data.get("State"),
            "postal_code": data.get("zipCode") if data.get("zipCode") else data.get("PostalCode"),
        },
        "property_data": {
            "square_footage": data.get("squareFootage") if data.get('squareFootage') else data.get("SquareFootage"),
            "lot_size": data.get("lotSizeSqFt") if data.get("lotSizeSqFt")  else data.get('LotSizeAcres') * 3560,
            "year_built": data.get("yearBuilt") if data.get('yearBuilt') else data.get("YearConstructed"),
            "type": data.get("propertyType") if data.get("propertyType") else data.get("PropertyType"),
            "bed": data.get("bedrooms") if data.get("bedrooms") else data.get("Bedrooms"),
            "bath": data.get("bathrooms") if data.get("bathrooms") else data.get("Bathrooms"),
            "rooms": data.get('features', {}).get("roomCount") if data.get('features', {}) else data.get("RoomCount"),
            "spectic": data.get('features', {}).get("septicSystem") if data.get('features', {}) else data.get("SepticSystem"),
            "price": data.get("price") if data.get("price") else data.get("SalePrice"),
            "last_sale_date": data.get("lastSaleDate") if data.get("lastSaleDate") else data.get("LastSaleDate"),
            "last_sale_price": data.get("lastSalePrice") if data.get("lastSalePrice") else data.get("LastSalePrice")
        }
    }
