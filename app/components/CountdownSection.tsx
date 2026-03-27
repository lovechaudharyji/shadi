"use client";

import { useEffect, useMemo, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function clampToZero(value: number) {
  return value < 0 ? 0 : value;
}

function getCountdown(targetTimeMs: number): Countdown {
  const nowMs = Date.now();
  const diffMs = targetTimeMs - nowMs;
  const totalSeconds = clampToZero(Math.floor(diffMs / 1000));

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function pad2(value: number) {
  return String(value).padStart(2, "0");
}

export function CountdownSection() {
  const targetTimeMs = useMemo(() => {
    const weddingDate = new Date(2026, 3, 25, 0, 0, 0, 0);
    return weddingDate.getTime();
  }, []);

  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      setCountdown(getCountdown(targetTimeMs));
    });
    const id = window.setInterval(() => {
      setCountdown(getCountdown(targetTimeMs));
    }, 1000);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearInterval(id);
    };
  }, [targetTimeMs]);

  return (
    <section
      className="relative text-white"
      style={{
        backgroundImage: `url("/image/card.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-emerald-900/70" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-5xl px-6 py-14 text-center">
        <div className="[font-family:var(--font-great-vibes)] text-5xl leading-none sm:text-6xl">
          Cowndown
        </div>
        <div className="mt-3 text-sm tracking-wide text-white/85 sm:text-base">
          To the most special day of our lives
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
            <div className="text-4xl font-semibold tabular-nums">
              {countdown.days}
            </div>
            <div className="mt-2 text-xs font-semibold tracking-[0.28em] text-white/80">
              DAY
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
            <div className="text-4xl font-semibold tabular-nums">
              {pad2(countdown.hours)}
            </div>
            <div className="mt-2 text-xs font-semibold tracking-[0.28em] text-white/80">
              HOURS
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
            <div className="text-4xl font-semibold tabular-nums">
              {pad2(countdown.minutes)}
            </div>
            <div className="mt-2 text-xs font-semibold tracking-[0.28em] text-white/80">
              MINIUTES
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
            <div className="text-4xl font-semibold tabular-nums">
              {pad2(countdown.seconds)}
            </div>
            <div className="mt-2 text-xs font-semibold tracking-[0.28em] text-white/80">
              SECONDS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
