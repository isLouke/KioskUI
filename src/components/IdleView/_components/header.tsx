import { ThemeSwitcher } from "@/components/common/toggle-theme";
import InfoFullDate from "@/components/common/info-full-date";
import InfoConnection from "@/components/common/info-connection";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-1/5 border-b border-foreground p-8">
      <InfoFullDate infoDate="15 Jul 2026" infoClock="14:43" />
      {/* <ThemeSwitcher /> */}
      <InfoConnection isOnline={true} />
    </div>
  );
}
