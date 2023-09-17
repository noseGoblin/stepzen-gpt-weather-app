import { SunIcon } from '@heroicons/react/solid';

function Loading() {
  return (
    <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500'>
      <SunIcon
        className='w-24 h-24 animate-bounce text-yellow-500'
        color='yellow'
      />
      <h1 className='text-6xl font-bold text-center mb-10 animate-pulse'>
        Loading City Weather Information
      </h1>
      <h2 className='text-xl font-bold text-center mb-10 animate-pulse'>
        Hold on, we are cruhcning the numbers & generating an AI summary of your
        forcast!
      </h2>
    </div>
  );
}

export default Loading;
