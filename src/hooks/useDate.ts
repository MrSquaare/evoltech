import { useEffect, useState } from "react";

type UseDateReturnType = {
  date: Date;
};

export const useDate = (intervalMs: number): UseDateReturnType => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, intervalMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalMs]);

  return { date };
};
