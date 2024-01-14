import countriesService from '../services/api';

type country = {
  region: string;
  subregion: string;
};

const totalSubregionPerRegion = async () => {
  const allCountries = await countriesService.getAllCountriesExt();
  const regionSubregionCount: { [key: string]: { [key: string]: number } } = {};

  allCountries.map((country: country) => {
    if (!regionSubregionCount[country.region]) {
      regionSubregionCount[country.region] = {};
    }
    if (!regionSubregionCount[country.region][country.subregion]) {
      regionSubregionCount[country.region][country.subregion] = 0;
    }
    regionSubregionCount[country.region][country.subregion]++;
  });

  // console.log('yooooooooo');
  console.log(regionSubregionCount);
  console.log(allCountries);
  return regionSubregionCount;
};

export default totalSubregionPerRegion;
