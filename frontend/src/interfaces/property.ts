export interface AddressProperty {
  normalized: string,
  line1: string,
  line2: string,
  city: string,
  state: string,
  postal_code: string
}

export interface OverviewProperty {
  beds: number,
  bath: number,
  rooms: number,
  square_footage: number,
  lot_size: number,
  price: number | null
}

export interface FeaturesProperty {
  year_built: number,
  type: string,
  septic: boolean,
  garage: string,
  garage_spaces: number,
  heating: string,
  cooling: string
}

export interface AdditionalInformationProperty {
  last_sale_date: string,
  last_sale_price: number,
  hoa_fee: number
}

export interface PropertyData {
  id: string,
  address: AddressProperty,
  overview: OverviewProperty,
  features: FeaturesProperty,
  additional_information: AdditionalInformationProperty
}