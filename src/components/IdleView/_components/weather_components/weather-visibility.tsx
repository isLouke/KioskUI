// George Loukas 16 Jul 2026
//
// Input:
// Average visibility, metres. The maximum value of the visibility is 10 km
//
// I convert the visibility in km

import { Eye } from "lucide-react";
import { Typography } from "@heroui/react";

export default function VisibilityInfo({ visibility }: { visibility: string }) {
  const visibilityValue = parseInt(visibility);
  const maxVisibility = Math.abs(visibilityValue - 10000) < 10;
  const visibilityKM = (visibilityValue / 1000).toFixed(1);

  return (
    <div className="flex items-center gap-2">
      <Eye className="text-emerald-500" />
      <div className="flex flex-col items-start">
        {maxVisibility ? (
          <Typography type="body" weight="bold">
            PERFECT
          </Typography>
        ) : (
          <Typography type="body" weight="bold">
            {visibilityKM} km
          </Typography>
        )}
        <Typography type="body" color="muted">
          VISIBILITY
        </Typography>
      </div>
    </div>
  );
}
