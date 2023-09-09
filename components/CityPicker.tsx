'use client';

import { Country, City } from 'country-state-city';
import { Select } from '@tremor/react';

const options = Country.getAllCountries().map((country) => ({
  label: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  value: country.isoCode,
}));

function CityPicker() {
  return <div>CityPicker</div>;
}

export default CityPicker;
