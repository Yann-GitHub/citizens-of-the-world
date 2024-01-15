import { RegionSubregionCountResult } from '../types/country';

export const getTotalCountriesInContinent = (continentData: RegionSubregionCountResult, continent: string) => {
  return Object.values(continentData[continent])
    .reduce((a, b) => a + b, 0)
    .toString();
};

export const getTotalCountriesInSubContinent = (
  continentData: RegionSubregionCountResult,
  continent: string,
  subContinent: string
) => {
  return subContinent ? continentData[continent][subContinent].toString() : '';
};
