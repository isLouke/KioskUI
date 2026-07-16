// George Loukas 16 Jul 2026
//
// Average visibility, metres. The maximum value of the visibility is 10 km

import { Eye } from "lucide-react";
import { Typography } from "@heroui/react";

export default function VisibilityInfo({ visibility }: { visibility: string }) {
  return (
    <div className="flex items-center gap-2">
      <Eye className="text-emerald-500" />
      <div className="flex flex-col items-start">
        <Typography type="body">{visibility} m</Typography>
        <Typography type="body" color="muted">
          VISIBILITY
        </Typography>
      </div>
    </div>
  );
}
