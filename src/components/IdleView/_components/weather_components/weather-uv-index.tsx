// George Loukas 16 Jul 2026
//
// Current UV index.
//
// TODO
// We may indicate dangerous levels with colloring the icon

import { ThermometerSun } from "lucide-react";
import { Typography } from "@heroui/react";

export default function UVInfo({ uvi }: { uvi: string }) {
  return (
    <div className="flex items-center gap-2">
      <ThermometerSun className="text-orange-500" />
      <div className="flex flex-col items-start">
        <Typography type="body" weight="bold">
          {uvi}
        </Typography>
        <Typography type="body" color="muted">
          UV INDEX
        </Typography>
      </div>
    </div>
  );
}
