import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCountryMain from '../components/CardCountryMain';
import countriesService from '../services/api';
import { Country } from '../types/country';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
  // Custom hook possible
  const [initialCountries, setInitialCountries] = useState<Country[]>([]);

  useEffect(() => {
    countriesService.getAllCountries().then((allCountries) => {
      console.log('Response fulfilled - First data fetching');
      console.log('<---------->');
      console.log(allCountries);
      console.log('<---------->');
      setInitialCountries(allCountries.data);
    });
  }, []);

  // console.log(totalSubRegion);
  // console.log('++++++++++++++');
  // console.log(initialCountries);
  // console.log('++++++++++++++');

  const navigate = useNavigate();

  const handleCardInfosClick = (countryId: number) => {
    navigate(`/country/${countryId}`); // Dynamic route
  };

  const handleCardCitizensClick = (countryId: number) => {
    navigate(`/all-citizens/${countryId}`); // Dynamic route
  };

  return (
    <div className="home container">
      <h1>Rencontrez des citizens du monde entier</h1>
      <Row className="g-4">
        {initialCountries.map((country) => (
          <Col sm={12} md={6} lg={4} className="d-flex justify-content-center" key={country.id}>
            <CardCountryMain
              capital={country.attributes.capital}
              nameCommon={country.attributes.nameCommon}
              capitalImage={country.attributes.capitalImage.data.attributes.url}
              flag={country.attributes.flag}
              slug={country.attributes.slug}
              onClickInfos={() => handleCardInfosClick(country.id)}
              onClickCitizens={() => handleCardCitizensClick(country.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
