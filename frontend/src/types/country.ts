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

export type Countries = {
  data: Country[];
};

export type Citizens = {
  data: Citizen[];
};

export type Picture = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type Citizen = {
  id: number;
  attributes: {
    city: string;
    countries: Countries;
    createdAt: string;
    date: string;
    email: string;
    firstname: string;
    langue: string;
    lastName: string;
    phoneNumber: string;
    picture: Picture;
    updatedAt: string;
    publishedAt: string;
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
    citizens: Citizens;
  };
};

export type totalSubregionPerRegion = {
  [key: string]: {
    [key: string]: number;
  };
};
