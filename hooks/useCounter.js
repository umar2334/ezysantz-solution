"use client";
import { useState, useEffect } from "react";

export function useCounter(end, duration = 2000, start = false) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const numEnd = parseFloat(String(end).replace(/[^0-9.]/g, ""));

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setVal(Math.floor(eased * numEnd));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return val;
}
