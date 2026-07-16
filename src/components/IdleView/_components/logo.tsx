import { ShieldCheck } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-2 scale-800">
      <ShieldCheck className="text-accent" />
      <span className="font-bold">Kiosk</span>
    </div>
  );
}
