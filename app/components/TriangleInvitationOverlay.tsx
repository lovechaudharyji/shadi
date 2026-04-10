"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export type TriangleInvitationOverlayProps = {
  backgroundSrc?: string;
  backgroundAlt?: string;
  navigateTo?: string;
};

export function TriangleInvitationOverlay({
  backgroundSrc = "/image/bp.png",
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

      <div className="relative z-10 flex h-[100svh] w-full items-center justify-center px-0 text-center text-[#800000]">
        <div className="sr-only">Tap anywhere to open invitation</div>
      </div>
    </div>
  );
}
