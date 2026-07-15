"use client";

import { Typography, Card, Meter } from "@heroui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MessageBox({
  header,
  content,
  timer,
}: {
  header: string;
  content: string;
  timer: number;
}) {
  const router = useRouter();
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Handle the timer counting up
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => {
        if (prev >= timer) {
          clearInterval(interval);
          return timer;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Handle the redirect side effect
  useEffect(() => {
    if (timeElapsed >= timer) {
      router.push("/");
    }
  }, [timeElapsed, timer, router]);

  return (
    <Card className="w-3/4 h-3/4">
      <Card.Header>
        <Typography type="h6">{header}</Typography>
      </Card.Header>
      <Card.Content>
        <Typography type="body">{content}</Typography>
      </Card.Content>
      <Card.Footer>
        <Meter
          aria-label="Time Counter"
          className="w-full justify-center"
          value={timeElapsed}
          maxValue={timer}
        >
          <Meter.Track>
            <Meter.Fill />
          </Meter.Track>
        </Meter>
      </Card.Footer>
    </Card>
  );
}
