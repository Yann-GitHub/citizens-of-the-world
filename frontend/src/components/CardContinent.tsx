import iconWorld from '../assets/world.svg';
import iconMap from '../assets/map-point.svg';
import imgWorldFromSpace from '../assets/img-from-space.svg';
import totalSubregionPerRegion from '../utils/totalRegionAndSubregion';
import { MyObjContinent, Continent, CountryCounts } from '../types/country';

import { useState, useEffect } from 'react';

type CardContinentProps = {
  subContinent?: string;
  continent?: string;
};

const CardContinent = ({ subContinent, continent }: CardContinentProps) => {
  // console.log(region):
  // console.log(subregion);

  const [myObjContinent, setMyObjContinent] = useState<MyObjContinent | null>();
  // const [totalSubRegion, setTotalSubRegion] = useState<Tsub | null>({});

  useEffect(() => {
    const continentsData = async () => {
      const data = await totalSubregionPerRegion();
      setMyObjContinent(data);
    };

    continentsData();
  }, []);

  console.log(myObjContinent);

  if (!continent || !myObjContinent) {
    return <div>Loading...</div>;
  }

  const totalCountriesInContinent = Object.values(myObjContinent[`${continent}`] as number[])
    .reduce((a, b) => a + b, 0)
    .toString();
  // console.log(typeof totalCountriesInContinent);

  const totalCountriesInSubContinent = subContinent ? myObjContinent[continent][subContinent].toString() : '';

  return (
    <div className="card-country-continent">
      <div className="card-country-continent__img">
        <img className="card-country-continent__image" src={imgWorldFromSpace} alt="img-world-from-space" />
      </div>

      <div className="card-country-continent__content">
        <h1 className="card-country-continent__title">
          {subContinent && continent ? `${continent} - ${subContinent}` : 'No data recived !!'}
        </h1>
        <div className="card-country-continent__totalRegion">
          <img src={iconWorld} alt="icon-world" />
          <p className="card-country-continent__text">
            {totalCountriesInContinent} pays en <span>{continent}</span>
          </p>
        </div>
        <div className="card-country-continent__totalSubRegion">
          <img src={iconMap} alt="icon-map" />
          <p className="card-country-continent__text">
            {totalCountriesInSubContinent} pays en <span>{subContinent}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContinent;
