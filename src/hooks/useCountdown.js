import { useState, useEffect, useCallback } from 'react';

/**
 * useCountdown — Returns live time remaining until targetDate
 * Updates every second. Returns zeroes when target is reached.
 */
export function useCountdown(targetDate) {
  const calculate = useCallback(() => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculate]);

  return timeLeft;
}
