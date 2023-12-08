import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CardCountryMain from '../components/CardCountryMain';
import countriesService from '../services/api';

import { Country } from '../types/country';
import { Col, Row } from 'react-bootstrap';

// type Country = {
//   id: number;
//   attributes: {
//     nameCommon: string;
//     nameOfficial: string;
//     capital: string;
//     capitalImage: {
//       data: {
//         attributes: {
//           url: string;
//         };
//       };
//     };
//     coatOfArms: string;
//     currencies: {
//       id: number;
//       name: string;
//       symbol: string;
//     };
//     flag: string;
//     languages: string;
//     latlng: {
//       id: number;
//       lat: number;
//       lng: number;
//     }; /////////verif
//     linkGoogleMap: string;
//     population: number;
//     region: string;
//     slug: string;
//     subregion: string;
//     unMember: boolean;
//     // updatedAt: Date;
//     // createdAt: Date;
//     // publishedAt: Date;
//   };
// };

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

  const navigate = useNavigate(); // Hook from react Router
  const handleCardInfosClick = (countryId: number) => {
    // Navigate to the country page with the countryId
    navigate(`/country/${countryId}`); // Dynamic route
  };

  return (
    <div className="home container">
      <h1>Rencontrez des citizens du monde entier</h1>
      <Row className="g-4">
        {initialCountries.map((country) => (
          //   <div className="col-sm-12 col-md-6 col-lg-4" key={country.id}>
          <Col sm={12} md={6} lg={4} className="d-flex justify-content-center" key={country.id}>
            <CardCountryMain
              capital={country.attributes.capital}
              nameCommon={country.attributes.nameCommon}
              capitalImage={country.attributes.capitalImage.data.attributes.url}
              flag={country.attributes.flag}
              slug={country.attributes.slug}
              onClick={() => handleCardInfosClick(country.id)} // privilégier un lien
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
