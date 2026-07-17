// George Loukas 16 Jul 2026
//
// Sunset time (Local)

import { Sunset } from "lucide-react";
import { Typography } from "@heroui/react";

export default function SunsetInfo({ sunset }: { sunset: string }) {
  return (
    <div className="flex items-center gap-2">
      <Sunset className="text-purple-500" />
      <div className="flex flex-col items-start">
        <Typography type="body" weight="bold">
          {sunset}
        </Typography>
        <Typography type="body" color="muted">
          SUNSET
        </Typography>
      </div>
    </div>
  );
}
