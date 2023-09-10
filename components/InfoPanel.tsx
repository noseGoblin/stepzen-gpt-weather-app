import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import CityPicker from './CityPicker';

type Props = {
  city: string;
  results: Root;
  lat: string;
  long: string;
};

function InfoPanel({ city, lat, long, results }: Props) {
  return (
    <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 text-white'>
      <div className='pb-5'>
        <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
        <p className='text-xs text-gray-400'>
          Long / Lat: {long}, {lat}
        </p>
      </div>

      <CityPicker />

      <hr className='my-10' />

      <div className='mt-5 flex items-center justify-between space-x-10 mb-5'>
        <div>
          <p className='text-xl'>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <p className='font-extralight'>
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoPanel;