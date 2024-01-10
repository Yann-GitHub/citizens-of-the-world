import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CardCountryMain from '../components/CardCountryMain';
import countriesService from '../services/api';

import { Country, totalSubregionPerRegion as Tsub } from '../types/country';
import { Col, Row } from 'react-bootstrap';

import totalSubregionPerRegion from '../utils/totalRegionAndSubregion';

const Home = () => {
  // Custom hook possible
  const [initialCountries, setInitialCountries] = useState<Country[]>([]);

  const [totalSubRegion, setTotalSubRegion] = useState<Tsub | null>({});

  useEffect(() => {
    countriesService.getAllCountries().then((allCountries) => {
      console.log('Response fulfilled - First data fetching');
      console.log('<---------->');
      console.log(allCountries);
      console.log('<---------->');
      setInitialCountries(allCountries.data);
    });

    const fetchData = async () => {
      const totalSubRegion = await totalSubregionPerRegion();
      return totalSubRegion;
    };

    fetchData().then((totalSubRegion) => {
      setTotalSubRegion(totalSubRegion);
      // console.log(totalSubRegion);
    });
  }, []);

  ///////////////// SUPPRIMER CE CODE ///////////////////////
  // Filtrer les pays dont la capital est "Paris"
  // const test = initialCountries.filter((country) => country.attributes.capital === 'Paris');
  // console.log(test);

  // const fetchData = async () => {
  //   const totalSubRegion = await totalSubregionPerRegion();
  //   return totalSubRegion;
  // };

  // const test = await fetchData();
  // console.log(test);
  /////////////////////////////////////////////////////

  console.log(totalSubRegion);
  console.log('++++++++++++++');
  console.log(initialCountries);
  console.log('++++++++++++++');

  const navigate = useNavigate(); // Hook from react Router
  const handleCardInfosClick = (countryId: number) => {
    // Navigate to the country page with the countryId
    navigate(`/country/${countryId}`); // Dynamic route
  };

  const handleCardCitizensClick = (countryId: number) => {
    // Navigate to the allCitizens page with the countryId
    navigate(`/all-citizens/${countryId}`); // Dynamic route
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
              onClickInfos={() => handleCardInfosClick(country.id)} // privilégier un lien
              onClickCitizens={() => handleCardCitizensClick(country.id)} // privilégier un lien
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
