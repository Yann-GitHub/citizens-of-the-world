import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import CardCountryMain from '../components/CardCountryMain';
import countriesService from '../services/api';

type Country = {
  id: number;
  attributes: {
    nameCommon: string;
    nameOfficial: string;
    capital: string;
    capitalImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    coatOfArms: string;
    currency: string; ////////verif
    flag: string;
    languages: string;
    latlng: {
      id: number;
      lat: number;
      lng: number;
    }; /////////verif
    linkGoogleMap: string;
    population: number;
    region: string;
    slug: string;
    subregion: string;
    unMember: boolean;
    updatedAt: Date;
    createdAt: Date;
    publishedAt: Date;
  };
};

const Home = () => {
  // Custom hook possible
  const [initialCountries, setInitialCountries] = useState<Country[]>([]);

  useEffect(() => {
    countriesService.getAllCountries().then((allCountries) => {
      console.log('Response fulfilled - First data fetching');
      console.log(allCountries);
      setInitialCountries(allCountries.data);
    });
  }, []);

  return (
    <div className="home container">
      <h1>Rencontrez des citizens du monde entier</h1>
      <div className="home__container row g-4">
        {initialCountries.map((country, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
            <CardCountryMain
              capital={country.attributes.capital}
              nameCommon={country.attributes.nameCommon}
              capitalImage={country.attributes.capitalImage.data.attributes.url}
              flag={country.attributes.flag}
              slug={country.attributes.slug}
            />
          </div>
        ))}
        {/* <div className="col-sm-12 col-md-6 col-lg-4">
          <CardCountryMain />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <CardCountryMain />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <CardCountryMain />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <CardCountryMain />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <CardCountryMain />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <CardCountryMain />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
