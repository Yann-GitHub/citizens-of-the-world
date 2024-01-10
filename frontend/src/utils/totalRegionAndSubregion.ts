import countriesService from '../services/api';

const totalSubregionPerRegion = async () => {
  const allCountries = await countriesService.getAllCountriesExt();
  const regionSubregionCount = {};

  allCountries.forEach((country) => {
    if (!regionSubregionCount[country.region]) {
      regionSubregionCount[country.region] = {};
    }
    if (!regionSubregionCount[country.region][country.subregion]) {
      regionSubregionCount[country.region][country.subregion] = 0;
    }
    regionSubregionCount[country.region][country.subregion]++;
  });

  return regionSubregionCount;
};

export default totalSubregionPerRegion;
