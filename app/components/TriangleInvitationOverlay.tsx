"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

export type TriangleInvitationOverlayProps = {
  backgroundSrc?: string;
  backgroundAlt?: string;
  navigateTo?: string;
};

export function TriangleInvitationOverlay({
  backgroundSrc = "/image/hero.png",
  backgroundAlt = "Wedding invitation cover background",
  navigateTo,
}: TriangleInvitationOverlayProps) {
  const transitionMs = 1200;
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const openInvitation = () => setIsClosing((current) => current || true);
  const scrollLockRef = useRef<{ bodyOverflow: string; htmlOverflow: string } | null>(
    null,
  );

  const transitionStyle = useMemo(
    () => ({ transitionDuration: `${transitionMs}ms` }),
    [transitionMs],
  );

  const flapTransition = useMemo(() => {
    const base: Pick<
      CSSProperties,
      "transitionProperty" | "transitionDuration" | "transitionTimingFunction"
    > = {
      transitionProperty: "transform,opacity",
      transitionDuration: `${transitionMs}ms`,
      transitionTimingFunction: "cubic-bezier(0.2, 0.85, 0.2, 1)",
    };

    return {
      top: { ...base, transitionDelay: "0ms" },
      left: { ...base, transitionDelay: "40ms" },
      right: { ...base, transitionDelay: "40ms" },
      bottom: { ...base, transitionDelay: "80ms" },
      shade: {
        transitionProperty: "opacity",
        transitionDuration: `${transitionMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.2, 0.85, 0.2, 1)",
        transitionDelay: "60ms",
      },
      button: {
        transitionProperty: "transform,opacity",
        transitionDuration: `${Math.max(600, Math.floor(transitionMs * 0.7))}ms`,
        transitionTimingFunction: "cubic-bezier(0.2, 0.85, 0.2, 1)",
        transitionDelay: "0ms",
      },
    } as const;
  }, [transitionMs]);

  const flapStyle = useMemo(() => {
    const base: Pick<
      CSSProperties,
      | "clipPath"
      | "backgroundImage"
      | "backgroundSize"
      | "backgroundPosition"
      | "backgroundRepeat"
    > = {
      clipPath: "",
      backgroundImage: `url("/image/card.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };

    return {
      top: {
        ...base,
        clipPath: "polygon(0 0, 100% 0, 50% 50%)",
      },
      bottom: {
        ...base,
        clipPath: "polygon(0 100%, 100% 100%, 50% 50%)",
      },
      left: {
        ...base,
        clipPath: "polygon(0 0, 0 100%, 50% 50%)",
      },
      right: {
        ...base,
        clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
      },
    } as const;
  }, []);

  useEffect(() => {
    if (!isMounted || isClosing) {
      if (scrollLockRef.current) {
        document.body.style.overflow = scrollLockRef.current.bodyOverflow;
        document.documentElement.style.overflow = scrollLockRef.current.htmlOverflow;
        scrollLockRef.current = null;
      }
      return;
    }

    if (!scrollLockRef.current) {
      scrollLockRef.current = {
        bodyOverflow: document.body.style.overflow,
        htmlOverflow: document.documentElement.style.overflow,
      };
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      if (scrollLockRef.current) {
        document.body.style.overflow = scrollLockRef.current.bodyOverflow;
        document.documentElement.style.overflow = scrollLockRef.current.htmlOverflow;
        scrollLockRef.current = null;
      }
    };
  }, [isClosing, isMounted]);

  useEffect(() => {
    if (!isClosing) return;

    const id = window.setTimeout(() => {
      setIsMounted(false);
      if (navigateTo) {
        router.push(navigateTo);
      }
    }, transitionMs);

    return () => window.clearTimeout(id);
  }, [isClosing, transitionMs, navigateTo, router]);

  if (!isMounted) return null;

  return (
    <div
      className={[
        "fixed inset-0 z-50 flex h-[100svh] w-[100svw] items-center justify-center overflow-hidden overscroll-none",
        "transition-[opacity,transform] ease-out",
        isClosing
          ? "pointer-events-none opacity-0 scale-[1.02] delay-200"
          : "opacity-100 scale-100",
      ].join(" ")}
      style={transitionStyle}
      aria-hidden={isClosing}
      onClick={openInvitation}
      onPointerDown={openInvitation}
      onTouchStart={openInvitation}
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 [isolation:isolate] [perspective:1200px]">
        <div
          className={[
            "absolute inset-0 opacity-100 will-change-transform origin-top transform-gpu",
            isClosing
              ? "[transform:translateY(-12%)_rotateX(78deg)] opacity-0"
              : "[transform:translateY(0)_rotateX(0deg)]",
          ].join(" ")}
          style={{ ...flapStyle.top, ...flapTransition.top }}
          aria-hidden="true"
        />
        <div
          className={[
            "absolute inset-0 opacity-100 will-change-transform origin-left transform-gpu",
            isClosing
              ? "[transform:translateX(-12%)_rotateY(78deg)] opacity-0"
              : "[transform:translateX(0)_rotateY(0deg)]",
          ].join(" ")}
          style={{ ...flapStyle.left, ...flapTransition.left }}
          aria-hidden="true"
        />
        <div
          className={[
            "absolute inset-0 opacity-100 will-change-transform origin-right transform-gpu",
            isClosing
              ? "[transform:translateX(12%)_rotateY(-78deg)] opacity-0"
              : "[transform:translateX(0)_rotateY(0deg)]",
          ].join(" ")}
          style={{ ...flapStyle.right, ...flapTransition.right }}
          aria-hidden="true"
        />
        <div
          className={[
            "absolute inset-0 opacity-100 will-change-transform origin-bottom transform-gpu",
            isClosing
              ? "[transform:translateY(12%)_rotateX(-78deg)] opacity-0"
              : "[transform:translateY(0)_rotateX(0deg)]",
          ].join(" ")}
          style={{ ...flapStyle.bottom, ...flapTransition.bottom }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex h-[100svh] w-full items-center justify-center px-0 text-center text-white">
        <div className="relative flex w-full flex-col items-center">
          <button
            type="button"
            onClick={openInvitation}
            onPointerDown={openInvitation}
            onTouchStart={openInvitation}
            className={[
              "pointer-events-auto relative w-full max-w-none h-48 sm:h-60 md:h-72 overflow-visible",
              "touch-manipulation",
              "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
              isClosing ? "opacity-0 scale-[0.96]" : "opacity-100",
            ].join(" ")}
            style={flapTransition.button}
            aria-label="Open invitation"
          >
            <Image
              src="/image/button.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-contain scale-[1.35] drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
            />
          </button>
          <div
            className={[
              "pointer-events-none mt-6 flex items-center justify-center gap-3 text-white/95 drop-shadow",
              isClosing ? "opacity-0" : "opacity-100",
            ].join(" ")}
            style={flapTransition.button}
            aria-hidden="true"
          >
            <div className="[font-family:var(--font-great-vibes)] text-5xl leading-none sm:text-6xl animate-[tapWave_1.6s_ease-in-out_infinite] will-change-transform">
              Tap
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
