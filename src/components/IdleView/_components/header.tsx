import { ThemeSwitcher } from "@/components/common/toggle-theme";
import InfoFullDate from "@/components/common/info-full-date";
import InfoConnection from "@/components/common/info-connection";

export default function Header({ dt }: { dt: number }) {
  const currentDate = new Date(dt * 1000); // Convert UTC timestamp to milliseconds
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="flex justify-between items-center h-1/5 border-b border-foreground p-8">
      <InfoFullDate infoDate={formattedDate} infoClock={formattedTime} />
      {/* <ThemeSwitcher /> */}
      <InfoConnection isOnline={true} />
    </div>
  );
}
