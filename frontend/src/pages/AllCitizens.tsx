import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import countriesService from '../services/api';
import { Citizen, Country as CountryType } from '../types/country';
import iconArrowLeft from '../assets/arrow-left.svg';
import CardCountryImage from '../components/CardCountryImage';
import CardCitizen from '../components/CardCitizen';
import { Col, Row } from 'react-bootstrap';

const AllCitizens = () => {
  // console.log('///// Country Page /////');
  // console.log(useParams());
  const { countryId } = useParams();

  const [country, setCountry] = useState<CountryType>();
  const [allCitizens, setAllCitizens] = useState<Citizen[]>([]);

  useEffect(() => {
    if (countryId) {
      countriesService.getOneCountryById(countryId).then((country) => {
        // console.log('Response fulfilled - First data fetching - Single country');
        // console.log(country);
        setCountry(country.data);
        setAllCitizens(country.data.attributes.citizens.data);
      });
    }
  }, [countryId]);

  // console.log('///// AllCitizens Page /////');
  // console.log(allCitizens);
  return (
    <div className="allCitizens">
      <div className="allCitizens__header">
        <Link to="/" className="allCitizens__header__link">
          <img className="allCitizens__header__arrow" src={iconArrowLeft} alt="icon-arrow-left" />
          Retour à l'accueil
        </Link>
        <h1 className="allCitizens__header__title">Citizens par pays: {country?.attributes.nameCommon}</h1>
      </div>
      <div className="allCitizens__image">
        <CardCountryImage capitalImage={country?.attributes.capitalImage.data.attributes.url} />
      </div>

      {}

      <Row className="g-4">
        {allCitizens.map((citizen) => (
          <Col sm={12} md={6} lg={4} className="d-flex justify-content-center" key={citizen.id}>
            <CardCitizen
              firstname={citizen.attributes.firstname}
              date={citizen.attributes.date}
              capital={citizen.attributes.city}
              photo={citizen.attributes.picture.data.attributes.url}
              email={citizen.attributes.email}
              phoneNumber={citizen.attributes.phoneNumber}
              countries={citizen.attributes.countries.data.map((country) => country.attributes.flag)}
              lastname={citizen.attributes.lastName}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllCitizens;
