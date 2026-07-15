import { Typography } from "@heroui/react";

import InfoClock from "@/components/common/info-clock";
import InfoDate from "@/components/common/info-date";

export default function InfoFullDate({
  infoDate,
  infoClock,
}: {
  infoDate: string;
  infoClock: string;
}) {
  return (
    <div className="flex gap-2">
      <InfoDate infoDate={infoDate} />
      <Typography type="h2" className="text-accent">
        |
      </Typography>
      <InfoClock infoClock={infoClock} />
    </div>
  );
}
