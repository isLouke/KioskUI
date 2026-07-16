// George Loukas 16 Jul 2026
//
// Wind speed. Units - default: metre/sec, metric: metre/sec, imperial: miles/hour.
// Wind direction. Units - degrees (meteorological)
//
// TODO:
// We should consider mapping the wind direction degrees to compass directions (N, NE, E, SE, S, SW, W, NW) for better readability.

import { Wind, Compass } from "lucide-react";
import { Typography } from "@heroui/react";

export default function WindInfo({
  windSpeed,
  windDirection,
}: {
  windSpeed: string;
  windDirection: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Wind className="text-blue-400" />
      <div className="flex flex-col justify-between items-center">
        <Typography type="body">{windSpeed} m/s</Typography>
        <Typography type="body">{windDirection}</Typography>
      </div>
    </div>
  );
}
