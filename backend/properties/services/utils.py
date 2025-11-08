import requests
from django.conf import settings

def make_get_request(uri, apiKey, address):
  url = f"{uri}?address{address}"
  headers = {"X-API-KEY": apiKey}
  response = requests.get(url, headers=headers)
  response.raise_for_status()
  return response.json()