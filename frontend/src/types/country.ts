// nommage TCountry pour éviter conflit avec le type Country

export type Currencies = {
  id: number;
  name: string;
  symbol: string;
};

export type LatLng = {
  id: number;
  lat: number;
  lng: number;
};

export type CapitalImage = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type FlagImage = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type Country = {
  id: number;
  attributes: {
    nameCommon: string;
    nameOfficial: string;
    capital: string;
    capitalImage: CapitalImage;
    coatOfArms: string;
    currencies: Currencies;
    flag: string;
    flagImage: FlagImage;
    languages: string;
    latlng: LatLng;
    linkGoogleMap: string;
    population: number;
    region: string;
    slug: string;
    subregion: string;
    unMember: boolean;
    citizensNumber: number;
  };
};
