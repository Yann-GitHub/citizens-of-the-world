import { Button } from 'react-bootstrap';
// import iconCity from '../assets/city.png';
// import iconPeople from '../assets/group.png';
import iconMap from '../assets/map-point.svg';
import iconCalendar from '../assets/calendar.svg';
import profileTest from '../assets/test-pic.jpg';

import imageTest from '../assets/un-member.svg';
import React from 'react';

// type CardCitizensProps = {
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   email: string;
//   languages: string; // Modif
//   city: string;
//   date: Date;
// };

const CardCitizen: React.FC<CardCitizensProps> = (
  {
    // nameCommon,
    // capital,
    // capitalImage,
    // flag,
    // onClickInfos,
    // onClickCitizens,
  }
) => {
  // console.log('/////CardCountryMainComponent/////');
  // console.log(capital);
  // console.log('//////////////////////////////////');
  return (
    <div className="card-citizen">
      <div className="card-citizen__content">
        <div className="card-citizen__top">
          <div className="card-citizen__left">
            <img className="card-citizen__image" src={profileTest} alt="image-user" />
          </div>
          <div className="card-citizen__right">
            <h2 className="card-citizen__name">Name</h2>
            <div className="card-citizen__city-block">
              <img className="card-citizen__iconCity" src={iconMap} alt="icon-city" />
              <span className="card-citizen__city">Toulon</span>
            </div>
            <div className="card-citizen__calendar-block">
              <img className="card-citizen__iconCalendar" src={iconCalendar} alt="icon-calendar" />
              <span className="card-citizen__date">25 Oct</span>
            </div>
          </div>
        </div>

        <div className="card-citizen__nav">
          <Button className="card-citizen__nav__btn" variant="primary">
            Infos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardCitizen;
