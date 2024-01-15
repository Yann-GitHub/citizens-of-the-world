import { useState, useEffect } from 'react';
import totalSubregionPerRegion from '../utils/totalRegionAndSubregion';
import { RegionSubregionCountResult } from '../types/country';

export const useCardContinent = () => {
  const [myObjContinent, setMyObjContinent] = useState<RegionSubregionCountResult>();

  useEffect(() => {
    const continentsData = async () => {
      const data = await totalSubregionPerRegion();
      setMyObjContinent(data);
    };

    continentsData();
  }, []);

  return myObjContinent;
};
