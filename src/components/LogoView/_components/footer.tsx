import PhysicalButton from "@/components/common/action-physical-button";
import { Typography } from "@heroui/react";

export default function Footer() {
  return (
    <div className="flex justify-center items-center h-1/5 border-t border-foreground p-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <PhysicalButton redirectPath="/main-menu" />
        <Typography type="h4">Press a Button</Typography>
      </div>
    </div>
  );
}
