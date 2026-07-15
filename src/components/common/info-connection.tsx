import { Wifi, WifiOff } from "lucide-react";

export default function InfoConnection({ isOnline }: { isOnline: boolean }) {
  return (
    <>
      {isOnline ? (
        <Wifi className="text-success scale-150 " />
      ) : (
        <WifiOff className="text-danger scale-150" />
      )}
    </>
  );
}
