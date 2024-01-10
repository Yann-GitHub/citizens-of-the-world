import axios from 'axios';

const baseURL = 'http://localhost:1338/api';
// http://localhost:1338/api/countries?populate=latlng,capitalImage,currencies

const extApiURL = 'https://restcountries.com/v3.1/all';

const getAllCountries = () => {
  const request = axios.get(`${baseURL}/countries?populate=latlng,capitalImage,currencies`);
  return request.then((response) => response.data);
};

// const getAllCountries = async () => {
//   const response = await axios.get(`${baseURL}/countries?populate=latlng,capitalImage,currencies`);
//   return response.data;
// };

// const getOneCountryById = (name: string) => {
//   const request = axios.get(`${baseURL}/countries?populate=latlng,capitalImage,currencies/${name}`);
//   return request.then((response) => response.data);
// };

const getOneCountryById = (id: string) => {
  const request = axios.get(
    `${baseURL}/countries/${id}?populate=latlng,capitalImage,currencies,flagImage,sub_continent,citizens.picture,citizens.countries`
  );
  return request.then((response) => response.data);
};

// const getOneCountryById = (id: string) => {
//   const request = axios.get(
//     `${baseURL}/countries/${id}?populate[0]=sub_continent&populate[1]=latlng&populate[2]=capitalImage&populate[3]=currencies&populate[4]=flagImage`
//   );
//   return request.then((response) => response.data);
// };

// const getOneCountry = async (id: number) => {
//   const response = await axios.get(`${baseURL}/countries/${id}?populate=latlng,capitalImage,currencies`);
//   return response.data;
// };

const getAllCountriesExt = () => {
  const request = axios.get(`${extApiURL}`);
  return request.then((response) => response.data);
};

export default { getAllCountries, getOneCountryById, getAllCountriesExt };
