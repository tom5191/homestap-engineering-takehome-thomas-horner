import requests
from django.conf import settings

def make_get_request(uri, apiKey, address):
  url = f"{uri}?address{address}"
  headers = {"X-API-KEY": apiKey}
  response = requests.get(url, headers=headers)
  response.raise_for_status()
  return response.json()


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
    "overview": {
        "beds": data.get("bedrooms") if data.get("bedrooms") else data.get("Bedrooms"),
        "bath": data.get("bathrooms") if data.get("bathrooms") else data.get("Bathrooms"),
        "rooms": data.get('features', {}).get("roomCount") if data.get('features', {}) else data.get("RoomCount"),
        "square_footage": data.get("squareFootage") if data.get('squareFootage') else data.get("SquareFootage"),
        "lot_size": data.get("lotSizeSqFt") if data.get("lotSizeSqFt")  else data.get('LotSizeAcres') * 3560,
        "price": data.get("price") if data.get("price") else data.get("SalePrice"),
    },
    "features": {
        "year_built": data.get("yearBuilt") if data.get('yearBuilt') else data.get("YearConstructed"),
        "type": data.get("propertyType") if data.get("propertyType") else data.get("PropertyType"),
        "spectic": data.get('features', {}).get("septicSystem") if data.get('features', {}) else data.get("SepticSystem"),
        "garage": data.get("features",{}).get("garageType") if data.get("features", {}) else data.get("GarageType"),
        "garage_spaces": data.get("features", {}).get("garageSpaces") if data.get("features", {}) else data.get("GarageSpaces"),
        "heating": data.get("features", {}).get('heatingType') if data.get("features",{}) else data.get("Heating"),
        "cooling": data.get("features", {}).get("coolingType") if data.get("features", {}) else data.get("Cooling"),
    },
    "additional_information": {
        "last_sale_date": data.get("lastSaleDate") if data.get("lastSaleDate") else data.get("LastSaleDate"),
        "last_sale_price": data.get("lastSalePrice") if data.get("lastSalePrice") else data.get("LastSalePrice"),
        "hoa_fee": data.get("hoa", {}).get('fee') if data.get("hoa", {}) else data.get("HomeownerAssociationFee"),
    }
  }
