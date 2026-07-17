// George Loukas 16 Jul 2026
//
// Sunrise time (Local)

import { Sunrise } from "lucide-react";
import { Typography } from "@heroui/react";

export default function SunriseInfo({ sunrise }: { sunrise: string }) {
  return (
    <div className="flex items-center gap-2">
      <Sunrise className="text-yellow-600" />
      <div className="flex flex-col items-start">
        <Typography type="body" weight="bold">
          {sunrise}
        </Typography>
        <Typography type="body" color="muted">
          SUNRISE
        </Typography>
      </div>
    </div>
  );
}
