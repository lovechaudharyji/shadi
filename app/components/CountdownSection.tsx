"use client";

import Image from "next/image";
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
    <section className="relative w-full overflow-hidden text-[#800000]">
      <div className="absolute inset-0">
        <Image
          src="/image/bird.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-top scale-110 sm:scale-[1.2]"
        />
      </div>
      <div className="relative mx-auto w-full max-w-5xl px-6 pt-6 pb-32 text-center sm:pt-8 sm:pb-36">
        <div className="translate-y-2 sm:translate-y-3">
          <div className="[font-family:var(--font-parisienne)] text-5xl leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)] sm:text-6xl">
            Countdown
          </div>
          <div className="mt-1 inline-block whitespace-nowrap text-xs font-semibold tracking-[0.12em] text-[#800000] sm:text-base sm:tracking-[0.22em]">
            TO THE MOST SPECIAL DAY OF OUR LIVES
          </div>

          <div className="mx-auto mt-10 grid max-w-[12rem] grid-cols-2 gap-1.5 sm:mt-16 sm:max-w-[13rem] sm:gap-2">
            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-[#800000]/15 bg-gradient-to-b from-white/80 to-white/60 px-0 py-0 ring-1 ring-[#800000]/10 shadow-[0_14px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm">
              <div className="[font-family:var(--font-instrument-serif)] text-2xl font-semibold leading-none tabular-nums text-[#800000] sm:text-3xl">
                {countdown.days}
              </div>
              <div className="mt-0 text-[8px] font-semibold leading-none tracking-[0.28em] text-[#800000] opacity-90 sm:text-[9px]">
                DAY
              </div>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-[#800000]/15 bg-gradient-to-b from-white/80 to-white/60 px-0 py-0 ring-1 ring-[#800000]/10 shadow-[0_14px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm">
              <div className="[font-family:var(--font-instrument-serif)] text-2xl font-semibold leading-none tabular-nums text-[#800000] sm:text-3xl">
                {pad2(countdown.hours)}
              </div>
              <div className="mt-0 text-[8px] font-semibold leading-none tracking-[0.28em] text-[#800000] opacity-90 sm:text-[9px]">
                HOURS
              </div>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-[#800000]/15 bg-gradient-to-b from-white/80 to-white/60 px-0 py-0 ring-1 ring-[#800000]/10 shadow-[0_14px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm">
              <div className="[font-family:var(--font-instrument-serif)] text-2xl font-semibold leading-none tabular-nums text-[#800000] sm:text-3xl">
                {pad2(countdown.minutes)}
              </div>
              <div className="mt-0 text-[8px] font-semibold leading-none tracking-[0.28em] text-[#800000] opacity-90 sm:text-[9px]">
                MINUTES
              </div>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-[#800000]/15 bg-gradient-to-b from-white/80 to-white/60 px-0 py-0 ring-1 ring-[#800000]/10 shadow-[0_14px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm">
              <div className="[font-family:var(--font-instrument-serif)] text-2xl font-semibold leading-none tabular-nums text-[#800000] sm:text-3xl">
                {pad2(countdown.seconds)}
              </div>
              <div className="mt-0 text-[8px] font-semibold leading-none tracking-[0.28em] text-[#800000] opacity-90 sm:text-[9px]">
                SECOND
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
