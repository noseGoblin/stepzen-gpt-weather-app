'use client';

import { Country, City } from 'country-state-city';
import { useState } from 'react';
import Select from 'react-select';

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  leblel: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);

  return (
    <div>
      <Select options={options} />
    </div>
  );
}

export default CityPicker;
