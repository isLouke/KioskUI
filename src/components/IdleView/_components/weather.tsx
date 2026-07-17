"use client";

import WeatherDescription from "./weather_components/weather-description";
import WindInfo from "./weather_components/weather-wind";
import VisibilityInfo from "./weather_components/weather-visibility";
import UVInfo from "./weather_components/weather-uv-index";
import SunsetInfo from "./weather_components/weather-sunset";
import SunriseInfo from "./weather_components/weather-sunrise";
import HumidityInfo from "./weather_components/weather-humidity";

// OpenWeather API response structure for reference
// {
//   "lat": 51.5,
//   "lon": -0.1,
//   "timezone": "Europe/London",
//   "timezone_offset": 3600,
//   "data": [
//     {
//       "dt": 1777449371,
//       "sunrise": 1777437375,
//       "sunset": 1777490344,
//       "temp": 286.42,
//       "feels_like": 285.32,
//       "pressure": 1024,
//       "humidity": 58,
//       "dew_point": 278.34,
//       "uvi": 1.55,
//       "clouds": 0,
//       "visibility": 10000,
//       "wind_speed": 8.23,
//       "wind_deg": 70,
//       "weather": [
//         {
//           "id": 800,
//           "main": "Clear",
//           "description": "sky is clear",
//           "icon": "01d"
//         }
//       ]
// 	  "alerts": [
// 		"8B46C632-DCA7-44D7-8BDF-02445621BAFF",
// 		"29F58A35-BB91-4A73-9F46-9FC64BDF604F",
// 		...
// 	]
//     }
//   ]
// }

// Important Notes
// WeatherDescription temperature should be converted to Celsius from Kelvin.
// WindInfo windDirection should be converted to compass direction from degrees.
// SunsetInfo expects Local Hour not UTC from the API.
// SunriseInfo expects Local Hour not UTC from the API.
// We should interchange the Sunrise and Sunset hours if its day or night. (i.e. if its day, show Sunset, if its night, show Sunrise)

export default function Weather({
  dt, // current time in UTC
  sunrise, // sunrise time in UTC
  sunset, // sunset time in UTC
  temp, // temperature in Kelvin
  feels_like, // feels like temperature in Kelvin
  pressure, // atmospheric pressure in hPa
  humidity, // humidity percentage
  dew_point, // dew point in Kelvin
  uvi, // UV index
  clouds, // cloudiness percentage
  visibility, // visibility in meters
  wind_speed, // wind speed in m/s
  wind_deg, // wind direction in degrees
  id, // weather condition id
  main, // group of weather parameters (Rain, Snow, Extreme etc.)
  description, // weather condition within the group
  icon, // weather icon id
}: {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  id: number;
  main: string;
  description: string;
  icon: string;
}) {
  const isDay = dt >= sunrise && dt < sunset; // Determine if it's day or night
  const isUVAvailable = uvi !== 0; // Check if UV index is available (not zero)
  const temperature = Math.round(temp - 273.15); // Convert Kelvin to Celsius
  const windDirection = getCompassDirection(wind_deg); // Convert wind degrees to compass direction

  // Convert the Dates from utc to the desired format.
  //
  // First convert the UTC timestamp to a Date object.
  const sunriseDate = new Date(sunrise * 1000);
  const sunsetDate = new Date(sunset * 1000);
  // Second extract the hours and minutes
  const sunriseHours = sunriseDate.getHours().toString().padStart(2, "0");
  const sunriseMinutes = sunriseDate.getMinutes().toString().padStart(2, "0");
  const sunsetHours = sunsetDate.getHours().toString().padStart(2, "0");
  const sunsetMinutes = sunsetDate.getMinutes().toString().padStart(2, "0");
  // Third desired format is HH:MM
  const sunriseTime = `${sunriseHours}:${sunriseMinutes}`;
  const sunsetTime = `${sunsetHours}:${sunsetMinutes}`;

  // Determine if the current time is after sunset
  //
  const sunsetPassed = dt >= sunset;

  return (
    <div className="flex  items-center justify-center gap-10 scale-150">
      <WeatherDescription
        main={main}
        description={description}
        temperature={temperature}
        isDay={isDay}
      />
      <div className="grid grid-cols-2 gap-8">
        <WindInfo
          windSpeed={wind_speed.toString()}
          windDirection={windDirection}
        />
        <VisibilityInfo visibility={visibility.toString()} />
        {isUVAvailable ? (
          <UVInfo uvi={uvi.toString()} />
        ) : (
          <HumidityInfo humidity={humidity.toString()} />
        )}

        {sunsetPassed ? (
          <SunriseInfo sunrise={sunriseTime} />
        ) : (
          <SunsetInfo sunset={sunsetTime} />
        )}
      </div>
    </div>
  );
}

function getCompassDirection(degrees: number): string {
  // 1. normalized degrees = ((raw degrees % 360) + 360) % 360
  // 2. sector index = round(normalized degrees / 22.5) % 16
  // 3. Map to Compass Point: The sector index is then mapped to its corresponding 16-point compass heading (0 = N, 1 = NNE, ..., 15 = NNW).
  const normalizedDegrees = ((degrees % 360) + 360) % 360;
  const sectorIndex = Math.round(normalizedDegrees / 22.5) % 16;

  const compassPoints = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  const direction = compassPoints[sectorIndex];
  return direction;
}
