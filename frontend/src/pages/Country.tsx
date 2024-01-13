import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import countriesService from '../services/api';
import { Country as CountryType } from '../types/country';
import iconArrowLeft from '../assets/arrow-left.svg';
import CardCoatOfArms from '../components/CardCoatOfArms';
import CardContinent from '../components/CardContinent';
import CartUnitedNations from '../components/CardUnitedNations';
import CardCountryImage from '../components/CardCountryImage';
import CardCountryDetails from '../components/CardCountryDetails';

const Country = () => {
  // console.log(useParams());
  const { countryId } = useParams();
  const [country, setCountry] = useState<CountryType>();

  useEffect(() => {
    if (countryId) {
      countriesService.getOneCountryById(countryId).then((country) => {
        console.log('Response fulfilled - First data fetching - Single country');
        console.log(country);
        setCountry(country.data);
      });
    }
  }, [countryId]);

  console.log(country);
  return (
    <div className="country">
      <div className="country__header">
        <Link to="/" className="country__header__link">
          <img className="country__header__arrow" src={iconArrowLeft} alt="icon-arrow-left" />
          Retour à l'accueil
        </Link>
        <h1 className="country__header__title">Informations sur le pays: {country?.attributes.nameCommon}</h1>
      </div>
      <div className="country__image">
        <CardCountryImage capitalImage={country?.attributes.capitalImage.data.attributes.url} />
      </div>

      <div className="country__main">
        <div className="country__main__cardDetails">
          {country?.attributes && (
            <CardCountryDetails
              nameOfficial={country.attributes.nameOfficial}
              nameCommon={country.attributes.nameCommon}
              capital={country.attributes.capital}
              population={country.attributes.population}
              linkGoogleMap={country.attributes.linkGoogleMap}
              languages={country.attributes.languages}
              currencies={country.attributes.currencies}
              latlng={country.attributes.latlng}
              flagImage={country.attributes.flagImage.data.attributes.url}
            />
          )}
        </div>
        <div className="country__main__center">
          <div className="country__main__center__cardUn">
            <CartUnitedNations isMember={country?.attributes.unMember} />
          </div>
          <div className="country__main__center__cardCoat">
            <CardCoatOfArms coatOfArms={country?.attributes.coatOfArms} />
          </div>
        </div>
        <div className="country__main__cardContinent">
          <CardContinent
            subContinent={country?.attributes.sub_continent.data.attributes.name}
            continent={country?.attributes.sub_continent.data.attributes.continent.data.attributes.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Country;
