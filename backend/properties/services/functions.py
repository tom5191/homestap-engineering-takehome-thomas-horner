import os
from properties.services.utils import make_get_request

def get_provider_1_data(address):
  url = os.environ.get('PROVIDER_1_BASE_URL')
  apiKey = os.environ.get('PROVIDER_1_API_KEY')
  data = make_get_request(url, apiKey, address)

  return data

def get_provider_2_data(address):
  url = os.environ.get('PROVIDER_2_BASE_URL')
  apiKey = os.environ.get('PROVIDER_2_API_KEY')
  data = make_get_request(url, apiKey, address)

  return data