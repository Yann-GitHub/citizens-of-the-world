import iconWorld from '../assets/world.svg';
import iconMap from '../assets/map-point.svg';
import imgWorldFromSpace from '../assets/img-from-space.svg';
// import imgUN from '../assets/img-logo-un.svg';

type CardContinentProps = {
  region?: string;
  subregion?: string;
};

const CardContinent = ({ region, subregion }: CardContinentProps) => {
  // console.log(region);
  // console.log(subregion);
  return (
    <div className="card-country-continent">
      <div className="card-country-continent__img">
        <img className="card-country-continent__image" src={imgWorldFromSpace} alt="img-world-from-space" />
      </div>

      <div className="card-country-continent__content">
        <h1 className="card-country-continent__title">
          {region}
          {subregion}
        </h1>
        <div className="card-country-continent__totalRegion">
          <img src={iconWorld} alt="icon-world" />
          <p className="card-country-continent__text">30 pays en Europe</p>
        </div>
        <div className="card-country-continent__totalSubRegion">
          <img src={iconMap} alt="icon-map" />
          <p className="card-country-continent__text">7 pays en Western Europe</p>
        </div>
      </div>
    </div>
  );
};

export default CardContinent;
