import {
  Sun,
  Cloud,
  CloudRain,
  CloudLightning,
  Moon,
  CloudFog,
  CloudDrizzle,
  CloudSnow,
} from "lucide-react";

// OpenWeather API
//
//  "weather": [
// 	{
// 	  "id": 500,
// 	  "main":"Rain",
// 	  "description": "light rain",
// 	  "icon": "10n"
// 	}
//   ],

// Based on id -> main:
// 2xx: Thunderstorm
// 3xx: Drizzle
// 5xx: Rain
// 6xx: Snow
// 7xx: Atmosphere (Mist, Smoke, Haze, Dust, Fog, Sand, Ash, Squall, Tornado)
// 800: Clear
// 80x: Clouds

export function getWeatherIcon({
  main,
  isDay,
}: {
  main: string;
  isDay: boolean;
}) {
  // Map OpenWeatherIcons to lucide-react icons
  switch (main) {
    case "Thunderstorm":
      return <CloudLightning className="text-blue-500" />;
    case "Drizzle":
      return <CloudDrizzle className="text-blue-500" />;
    case "Rain":
      return <CloudRain className="text-gray-300" />;
    case "Snow":
      return <CloudSnow className="text-blue-200" />;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return <CloudFog className="text-gray-400" />;
    case "Clear":
      return isDay ? (
        <Sun className="text-yellow-500" />
      ) : (
        <Moon className="text-gray-300" />
      );
    case "Clouds":
      return <Cloud className="text-gray-400" />;
    default:
      return isDay ? (
        <Sun className="text-yellow-500" />
      ) : (
        <Moon className="text-gray-300" />
      );
  }
}
