'use client';

import { Country, City } from 'country-state-city';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Select from 'react-select';
import { GlobeIcon } from '@heroicons/react/solid';

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
  const router = useRouter();

  const hanldeSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  return (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2 text-white/80'>
        <GlobeIcon className='h-5 w-5 text-white' />
        <label htmlFor='country'>Country</label>
      </div>
      <Select
        value={selectedCountry}
        onChange={hanldeSelectedCountry}
        options={options}
      />
    </div>
  );
}

export default CityPicker;
