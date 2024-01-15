import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MydModal from './Modal';
import iconMap from '../assets/map-point.svg';
import iconCalendar from '../assets/calendar.svg';
import React from 'react';

type CardCitizenProps = {
  firstname: string;
  lastname: string;
  date: string;
  capital: string;
  photo: string;
  email: string;
  phoneNumber: string;
  countries: string[];
};

const CardCitizen: React.FC<CardCitizenProps> = ({
  firstname,
  lastname,
  date,
  capital,
  photo,
  email,
  phoneNumber,
  countries,
}) => {
  // console.log('/////CardCountryMainComponent/////');
  // console.log(capital);
  // console.log('//////////////////////////////////');

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const allCitizensElement = document.querySelector('.allCitizens');
    const headerElement = document.querySelector('.header');
    const footerElement = document.querySelector('.footer');

    if (modalShow) {
      allCitizensElement?.classList.add('blury');
      headerElement?.classList.add('blury');
      footerElement?.classList.add('blury');
    } else {
      allCitizensElement?.classList.remove('blury');
      headerElement?.classList.remove('blury');
      footerElement?.classList.remove('blury');
    }
  }, [modalShow]);

  return (
    <div className="card-citizen">
      <div className="card-citizen__content">
        <div className="card-citizen__top">
          <div className="card-citizen__left">
            <img className="card-citizen__image" src={`http://localhost:1338${photo}`} alt="image-user" />
          </div>
          <div className="card-citizen__right">
            <h2 className="card-citizen__name">{firstname}</h2>
            <div className="card-citizen__city-block">
              <img className="card-citizen__iconCity" src={iconMap} alt="icon-city" />
              <span className="card-citizen__city">{capital}</span>
            </div>
            <div className="card-citizen__calendar-block">
              <img className="card-citizen__iconCalendar" src={iconCalendar} alt="icon-calendar" />
              <span className="card-citizen__date">{date.slice(2)}</span>
            </div>
          </div>
        </div>

        <div className="card-citizen__nav">
          <Button className="card-citizen__nav__btn" variant="primary" onClick={() => setModalShow(true)}>
            Infos
          </Button>
          <MydModal
            {...{ firstname, lastname, date, capital, photo, email, phoneNumber, countries }}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCitizen;
