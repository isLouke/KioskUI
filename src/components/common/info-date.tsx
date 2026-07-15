import { Typography } from "@heroui/react";

export default function InfoDate({ infoDate }: { infoDate: string }) {
  return (
    <div className="flex items-center justify-center">
      <Typography type="h2">{infoDate}</Typography>
    </div>
  );
}
