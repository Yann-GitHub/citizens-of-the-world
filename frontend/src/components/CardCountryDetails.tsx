import { Currencies, LatLng } from '../types/country';

type CardCountryDetailsProps = Partial<{
  nameOfficial: string;
  nameCommon: string;
  capital: string;
  population: number;
  linkGoogleMap: string;
  languages: string;
  currencies: Currencies;
  latlng: LatLng;
  flagImage: string;
}>;

const CardCountryDetails = ({
  nameOfficial,
  nameCommon,
  capital,
  population,
  linkGoogleMap,
  languages,
  currencies,
  latlng,
  flagImage,
}: CardCountryDetailsProps) => {
  // console.log(currencies);
  // console.log(latlng);
  return (
    <div className="card-country-details">
      <div className="card-country-details__content">
        <h1 className="card-country-details__title">{nameCommon}</h1>
        <img className="card-country-details__image" src={`http://localhost:1338${flagImage}`} alt="flag-image" />
        <div className="card-country-details__infos">
          <p>
            <span>Nom officiel : </span>
            {nameOfficial}
          </p>
          <p>
            <span>Capital : </span>
            {capital}
          </p>
          <p>
            <span>Population : </span>
            {population}
          </p>
          <p>
            <span>Langue : </span>
            {languages}
          </p>
          {latlng && (
            <>
              <p>
                <span>Latitude : </span>
                {latlng.lat}
              </p>
              <p>
                <span>Longitude : </span>
                {latlng.lng}
              </p>
            </>
          )}
          {currencies && (
            <p>
              <span>Monnaie : </span>
              {currencies.name} - {currencies.symbol}
            </p>
          )}

          <p>
            <a className="card-country-details__link" href={linkGoogleMap} target="_blank">
              Accéder via GoogleMaps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCountryDetails;
