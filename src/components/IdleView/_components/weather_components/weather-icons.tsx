import {
  Sun,
  Cloud,
  CloudRain,
  Snowflake,
  CloudLightning,
  Moon,
  CloudSun,
  CloudMoon,
  Cloudy,
  CloudFog,
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

// Based on id:
// 2xx: Thunderstorm
// 3xx: Drizzle
// 5xx: Rain
// 6xx: Snow
// 7xx: Atmosphere (mist, smoke, haze, etc.)
// 800: Clear
// 80x: Clouds

export function getWeatherIcon({
  id,
  main,
  description,
  icon,
}: {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}) {
  // Map OpenWeatherIcons to lucide-react icons
  switch (icon) {
    case "01d": // Clear sky (day)
      return <Sun className="text-yellow-500 scale-200" />;
    case "01n": // Clear sky (night)
      return <Moon className="text-yellow-100" />;
    case "02d": // Few clouds (day)
      return <CloudSun className="text-gray-400" />;
    case "02n": // Few clouds (night)
      return <CloudMoon className="text-gray-400" />;
    case "03d": // Scattered clouds (day)
      return <Cloud className="text-gray-400" />;
    case "03n": // Scattered clouds (night)
      return <Cloud className="text-gray-400" />;
    case "04d": // Broken clouds (day)
      return <Cloudy className="text-gray-400" />;
    case "04n": // Broken clouds (night)
      return <Cloudy className="text-gray-400" />;
    case "09d": // Shower rain (day)
      return <CloudRain className="text-blue-500" />;
    case "09n": // Shower rain (night)
      return <CloudRain className="text-blue-500" />;
    case "10d": // Rain (day)
      return <CloudRain className="text-blue-500" />;
    case "10n": // Rain (night)
      return <CloudRain className="text-blue-500" />;
    case "11d": // Thunderstorm (day)
      return <CloudLightning className="text-blue-300" />;
    case "11n": // Thunderstorm (night)
      return <CloudLightning className="text-blue-300" />;
    case "13d": // Snow (day)
      return <Snowflake className="text-blue-200" />;
    case "13n": // Snow (night)
      return <Snowflake className="text-blue-200" />;
    case "50d": // Mist (day)
      return <CloudFog className="text-gray-400" />;
    case "50n": // Mist (night)
      return <CloudFog className="text-gray-400" />;
  }
}
