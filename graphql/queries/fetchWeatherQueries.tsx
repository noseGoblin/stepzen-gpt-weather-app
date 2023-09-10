import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,uv_index_clear_sky_max,sunrise,sunset"
    $hourly: String = "temperature_2m,relativehumidity_2m,precipitation,precipitation_probability,windgusts_10m,uv_index,uv_index_clear_sky,apparent_temperature,rain,snowfall,snow_depth,showers"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      elevation
      generationtime_ms
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      hourly {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snowfall
        snow_depth
        temperature_2m
        time
        windgusts_10m
        weathercode
        uv_index_clear_sky
        uv_index
      }
      hourly_units {
        windgusts_10m
        weathercode
        uv_index_clear_sky
        uv_index
        time
        temperature_2m
        snowfall
        snow_depth
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
      }
    }
  }
`;

export default fetchWeatherQuery;
