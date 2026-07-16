"use client";

import WeatherDescription from "./weather_components/weather-description";
import WindInfo from "./weather_components/weather-wind";
import VisibilityInfo from "./weather_components/weather-visibility";
import UVInfo from "./weather_components/weather-uv-index";
import SunsetInfo from "./weather_components/weather-sunset";
import SunriseInfo from "./weather_components/weather-sunrise";

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

export default function Weather() {
  return (
    <div className="flex w-screen items-center justify-center gap-10 scale-150">
      <WeatherDescription
        id={800}
        main="Clear"
        description="sky is clear"
        icon="01d"
        temperature={25}
      />
      <div className="grid grid-cols-2 gap-8">
        <WindInfo windSpeed="8.2" windDirection="NE" />
        <VisibilityInfo visibility="10" />

        <UVInfo uvi="1.55" />
        <SunriseInfo sunrise="06:45" />
        {/* <SunsetInfo sunset="19:32" /> */}
      </div>
    </div>
  );
}
