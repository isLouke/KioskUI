"use client";

import { Button } from "@heroui/react/button";
import { Circle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PhysicalButton({
  redirectPath,
}: {
  redirectPath: string;
}) {
  const router = useRouter();

  return (
    <Button
      isIconOnly
      variant="ghost"
      onPress={() => router.push(redirectPath)}
    >
      <Circle className="scale-200 animate-pulse text-accent" />
    </Button>
  );
}
