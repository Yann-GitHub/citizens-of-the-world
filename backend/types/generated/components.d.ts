import type { Schema, Attribute } from '@strapi/strapi';

export interface CapitalInfosCapitalInfos extends Schema.Component {
  collectionName: 'components_capital_infos_capital_infos';
  info: {
    displayName: 'capital infos';
    icon: 'pin';
    description: '';
  };
  attributes: {
    lat: Attribute.Decimal;
    lng: Attribute.Decimal;
  };
}

export interface CurrenciesCurrencies extends Schema.Component {
  collectionName: 'components_currencies_currencies';
  info: {
    displayName: 'currencies';
    icon: 'database';
  };
  attributes: {
    name: Attribute.String;
    symbol: Attribute.String;
  };
}

export interface LanguagesLanguages extends Schema.Component {
  collectionName: 'components_languages_languages';
  info: {
    displayName: 'languages';
    icon: 'user';
    description: '';
  };
  attributes: {
    language1: Attribute.String;
    language2: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'capital-infos.capital-infos': CapitalInfosCapitalInfos;
      'currencies.currencies': CurrenciesCurrencies;
      'languages.languages': LanguagesLanguages;
    }
  }
}
