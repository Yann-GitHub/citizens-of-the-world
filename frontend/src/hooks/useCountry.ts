import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import countriesService from '../services/api';
import { Country } from '../types/country';

export const useCountry = () => {
  const [country, setCountry] = useState<Country>();
  const { countryId } = useParams();

  //console.log(countryId);

  useEffect(() => {
    const fetchCountry = async () => {
      if (countryId) {
        const oneCountry = await countriesService.getOneCountryById(countryId);
        // console.log('Response fulfilled - First data fetching');
        // console.log(allCountries);
        setCountry(oneCountry.data);
      }
    };

    fetchCountry();
  }, [countryId]);

  return country;
};
