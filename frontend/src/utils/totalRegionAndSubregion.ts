import countriesService from '../services/api';
import { CountryExt, RegionSubregionCountResult } from '../types/country';

const totalSubregionPerRegion = async () => {
  const allCountries = await countriesService.getAllCountriesExt();
  const regionSubregionCount: RegionSubregionCountResult = {};

  allCountries.map((country: CountryExt) => {
    if (!regionSubregionCount[country.region]) {
      regionSubregionCount[country.region] = {};
    }
    if (!regionSubregionCount[country.region][country.subregion]) {
      regionSubregionCount[country.region][country.subregion] = 0;
    }
    regionSubregionCount[country.region][country.subregion]++;
  });

  // console.log(regionSubregionCount);
  // console.log(allCountries);
  return regionSubregionCount;
};

export default totalSubregionPerRegion;
