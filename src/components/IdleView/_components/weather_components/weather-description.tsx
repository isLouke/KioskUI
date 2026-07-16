import { Typography } from "@heroui/react";
import { getWeatherIcon } from "./weather-icons";

export default function WeatherDescription({
  id,
  main,
  description,
  icon,
  temperature,
}: {
  id: number;
  main: string;
  description: string;
  icon: string;
  temperature: number;
}) {
  return (
    <div className="flex items-center gap-4">
      {getWeatherIcon({ id, main, description, icon })}
      <div className="flex flex-col items-start">
        <Typography type="h1">{temperature}°</Typography>
        <Typography type="h5" className="uppercase">
          {description}
        </Typography>
      </div>
    </div>
  );
}
