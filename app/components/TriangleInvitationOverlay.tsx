"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

export type TriangleInvitationOverlayProps = {
  backgroundSrc?: string;
  backgroundAlt?: string;
};

export function TriangleInvitationOverlay({
  backgroundSrc = "/image/1.jpeg",
  backgroundAlt = "Wedding invitation cover background",
}: TriangleInvitationOverlayProps) {
  const transitionMs = 700;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const transitionStyle = useMemo(
    () => ({ transitionDuration: `${transitionMs}ms` }),
    [transitionMs],
  );

  const flapStyle = useMemo(() => {
    const rolexGreen = "#006039";
    const softWhite = "rgba(255,255,255,0.92)";
    const base: Pick<CSSProperties, "clipPath" | "backgroundImage"> = {
      clipPath: "",
      backgroundImage: "",
    };

    return {
      top: {
        ...base,
        clipPath: "polygon(0 0, 100% 0, 50% 50%)",
        backgroundImage: `linear-gradient(to bottom, ${softWhite} 0%, ${rolexGreen} 70%)`,
      },
      bottom: {
        ...base,
        clipPath: "polygon(0 100%, 100% 100%, 50% 50%)",
        backgroundImage: `linear-gradient(to top, ${softWhite} 0%, ${rolexGreen} 70%)`,
      },
      left: {
        ...base,
        clipPath: "polygon(0 0, 0 100%, 50% 50%)",
        backgroundImage: `linear-gradient(to right, ${softWhite} 0%, ${rolexGreen} 70%)`,
      },
      right: {
        ...base,
        clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
        backgroundImage: `linear-gradient(to left, ${softWhite} 0%, ${rolexGreen} 70%)`,
      },
    } as const;
  }, []);

  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isClosing) return;

    const id = window.setTimeout(() => {
      setIsMounted(false);
    }, transitionMs);

    return () => window.clearTimeout(id);
  }, [isClosing, transitionMs]);

  if (!isMounted) return null;

  return (
    <div
      className={[
        "fixed inset-0 z-50 flex h-[100svh] w-screen items-center justify-center overflow-hidden overscroll-none",
        "transition-[opacity,transform] ease-out",
        isClosing ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100",
      ].join(" ")}
      style={transitionStyle}
      aria-hidden={isClosing}
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="pointer-events-none absolute inset-0 [isolation:isolate]">
        <div
          className="absolute inset-0 opacity-90"
          style={flapStyle.top}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-85"
          style={flapStyle.left}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-85"
          style={flapStyle.right}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-90"
          style={flapStyle.bottom}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-black/10 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex h-[100svh] w-full items-center justify-center px-6 text-center text-white">
        <button
          type="button"
          onClick={() => setIsClosing(true)}
          className={[
            "pointer-events-auto inline-flex h-12 items-center justify-center rounded-full px-10",
            "bg-white/15 text-sm font-semibold tracking-wide text-white",
            "ring-1 ring-white/25 backdrop-blur",
            "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
          ].join(" ")}
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}
