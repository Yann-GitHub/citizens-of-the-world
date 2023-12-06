import axios from 'axios';

const baseURL = 'http://localhost:1338/api';
// http://localhost:1338/api/countries?populate=latlng,capitalImage,currencies

const getAllCountries = () => {
  const request = axios.get(`${baseURL}/countries?populate=latlng,capitalImage,currencies`);
  return request.then((response) => response.data);
};

// const getAllCountries = async () => {
//   const response = await axios.get(`${baseURL}/countries?populate=latlng,capitalImage,currencies`);
//   return response.data;
// };

// const getOneCountry = (name: string) => {
//     const request = axios.get(`${baseURL}/countries?populate=latlng,capitalImage,currencies/${name}`);
//     return request.then((response) => response.data);
//     }

const getOneCountry = async (id: number) => {
  const response = await axios.get(`${baseURL}/countries/${id}?populate=latlng,capitalImage,currencies`);
  return response.data;
};

export default { getAllCountries, getOneCountry };
