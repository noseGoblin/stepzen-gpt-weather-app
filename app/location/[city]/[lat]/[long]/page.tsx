import { getClient } from '@/apollo-client';
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: 'true',
      latitude: lat,
      longitude: long,
      timezone: 'GMT',
    },
  });

  const results: Root = data.myQuery;

  console.log(results);

  return (
    <div>
      {/* { <InfoPanel />} */}

      <div>
        <div>
          <div>
            <h2>Today's Overview</h2>
            <p>
              Last Updated at:{' '}
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
