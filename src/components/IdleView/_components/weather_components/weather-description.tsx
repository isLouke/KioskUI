import { Typography } from "@heroui/react";
import { getWeatherIcon } from "./weather-icons";

export default function WeatherDescription({
  main,
  description,
  temperature,
  isDay,
}: {
  main: string;
  description: string;
  temperature: number;
  isDay: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      {getWeatherIcon({ main, isDay })}
      <div className="flex flex-col items-start">
        <Typography type="h1">{temperature}°</Typography>
        <Typography type="h5" className="uppercase">
          {description}
        </Typography>
      </div>
    </div>
  );
}
