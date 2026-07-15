import { Typography } from "@heroui/react";

export default function InfoClock({ infoClock }: { infoClock: string }) {
  return (
    <div className="flex items-center justify-center">
      <Typography type="h2" className="animate-pulse">
        {infoClock}
      </Typography>
    </div>
  );
}
