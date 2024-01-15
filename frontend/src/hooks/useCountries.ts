import { useState, useEffect } from 'react';
import countriesService from '../services/api';
import { Country } from '../types/country';

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const allCountries = await countriesService.getAllCountries();
      // console.log('Response fulfilled - First data fetching');
      // console.log(allCountries);
      setCountries(allCountries.data);
    };

    fetchCountries();
  }, []);

  return countries;
};
