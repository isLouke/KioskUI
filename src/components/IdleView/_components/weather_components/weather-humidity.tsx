// George Loukas 16 Jul 2026
//
// Humidity, %

import { Droplets } from "lucide-react";
import { Typography } from "@heroui/react";

export default function HumidityInfo({ humidity }: { humidity: string }) {
  return (
    <div className="flex items-center gap-2">
      <Droplets className="text-blue-500" />
      <div className="flex flex-col items-start">
        <Typography type="body">{humidity} %</Typography>
        <Typography type="body" color="muted">
          HUMIDITY
        </Typography>
      </div>
    </div>
  );
}
