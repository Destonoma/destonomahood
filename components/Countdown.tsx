"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  // Ganti tanggal launch DTM nanti
  const launchDate = new Date("2026-12-31T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <section className="max-w-7xl mx-auto px-8 pb-24">
      <div className="rounded-3xl border border-lime-500/20 bg-zinc-900 p-10">

        <p className="uppercase tracking-[4px] text-lime-400 text-center">
          Campaign Starts In
        </p>

        <div className="grid grid-cols-4 gap-5 mt-8">

          <div className="rounded-2xl bg-black p-6 text-center">
            <h2 className="text-5xl font-black text-lime-400">
              {timeLeft.days}
            </h2>
            <p className="text-gray-500 mt-2">Days</p>
          </div>

          <div className="rounded-2xl bg-black p-6 text-center">
            <h2 className="text-5xl font-black text-lime-400">
              {timeLeft.hours}
            </h2>
            <p className="text-gray-500 mt-2">Hours</p>
          </div>

          <div className="rounded-2xl bg-black p-6 text-center">
            <h2 className="text-5xl font-black text-lime-400">
              {timeLeft.minutes}
            </h2>
            <p className="text-gray-500 mt-2">Minutes</p>
          </div>

          <div className="rounded-2xl bg-black p-6 text-center">
            <h2 className="text-5xl font-black text-lime-400">
              {timeLeft.seconds}
            </h2>
            <p className="text-gray-500 mt-2">Seconds</p>
          </div>

        </div>
      </div>
    </section>
  );
}