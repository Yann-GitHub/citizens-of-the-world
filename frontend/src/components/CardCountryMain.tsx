import { Button } from 'react-bootstrap';
import iconCity from '../assets/city.png';
import iconPeople from '../assets/group.png';
import React from 'react';

type CardCountryMainProps = {
  nameCommon: string;
  capital: string;
  capitalImage: string;
  flag: string;
  slug: string;
  onClickInfos: () => void; // Ajout de la props onClick
  onClickCitizens: () => void; // Ajout de la props onClick
};

const CardCountryMain: React.FC<CardCountryMainProps> = ({
  nameCommon,
  capital,
  capitalImage,
  flag,
  slug,
  onClickInfos,
  onClickCitizens,
}) => {
  // console.log('/////CardCountryMainComponent/////');
  // console.log(capital);
  console.log(slug);
  // console.log('//////////////////////////////////');
  return (
    <div className="card-country-main">
      <div className="card-country-main__title">
        <span className="card-country-main__title__name">{nameCommon}</span>
        <span className="card-country-main__title__flag">{flag}</span>
      </div>

      <div>
        <img
          className="card-country-main__photo"
          src={`http://localhost:1338${capitalImage}`} // !!!!
          alt="photo"
        />
      </div>

      <div className="card-country-main__infos">
        <div className="card-country-main__infos__block">
          <img className="card-country-main__infos__icons" src={iconCity} alt="icon-city" />
          <span className="card-country-main__infos__txt">{capital}</span>
        </div>
        <div className="card-country-main__infos__block">
          <img className="card-country-main__infos__icons" src={iconPeople} alt="icon-people" />
          <span className="card-country-main__infos__txt">67 citizens</span>
        </div>
      </div>
      <div className="card-country-main__nav">
        <Button onClick={onClickInfos} className="card-country-main__nav__btn" variant="primary">
          Infos
        </Button>
        <Button onClick={onClickCitizens} className="card-country-main__nav__btn" variant="primary">
          Citizens
        </Button>
      </div>
    </div>
  );
};

export default CardCountryMain;
