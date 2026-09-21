"use client";

import { useEffect, useRef } from "react";

const INITIAL_X = 0.5;
const INITIAL_Y = 0.25;

/**
 * Live ambient light that tracks the pointer on fine-pointer devices.
 * Touch/coarse-pointer devices keep the glow fixed. The user can disable motion from the site toggle.
 */
export function CursorLight() {
  const glowRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const halo = haloRef.current;
    if (!glow || !halo) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    let targetX = window.innerWidth * INITIAL_X;
    let targetY = window.innerHeight * INITIAL_Y;
    let glowX = targetX;
    let glowY = targetY;
    let haloX = targetX;
    let haloY = targetY;
    let raf = 0;
    let active = true;
    let motionEnabled = document.documentElement.dataset.motion !== "reduce";

    const setStaticPosition = () => {
      const x = window.innerWidth * INITIAL_X;
      const y = window.innerHeight * INITIAL_Y;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      halo.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      glowX = x;
      glowY = y;
      haloX = x;
      haloY = y;
    };

    const stopAnimation = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const render = () => {
      const glowEase = 0.12;
      const haloEase = 0.075;

      glowX += (targetX - glowX) * glowEase;
      glowY += (targetY - glowY) * glowEase;
      haloX += (targetX - haloX) * haloEase;
      haloY += (targetY - haloY) * haloEase;

      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      halo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0) translate(-50%, -50%)`;

      const settled =
        Math.abs(targetX - glowX) < 0.2 &&
        Math.abs(targetY - glowY) < 0.2 &&
        Math.abs(targetX - haloX) < 0.2 &&
        Math.abs(targetY - haloY) < 0.2;

      raf = settled ? 0 : requestAnimationFrame(render);
    };

    const syncMotion = (enabled: boolean) => {
      motionEnabled = enabled;
      stopAnimation();

      if (!motionEnabled || !finePointer.matches) {
        setStaticPosition();
        return;
      }

      if (!raf) raf = requestAnimationFrame(render);
    };

    const onMotionPreferenceChange = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      syncMotion(customEvent.detail);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!motionEnabled || !finePointer.matches) return;
      targetX = event.clientX;
      targetY = event.clientY;

      if (!raf) raf = requestAnimationFrame(render);
    };

    const onPointerLeave = () => {
      active = false;
      stopAnimation();
    };

    const onPointerEnter = () => {
      active = true;
      if (motionEnabled && finePointer.matches && !raf) raf = requestAnimationFrame(render);
    };

    const onViewportResize = () => {
      if (!active) return;
      targetX = Math.min(targetX, window.innerWidth);
      targetY = Math.min(targetY, window.innerHeight);
      if (!motionEnabled || !finePointer.matches) setStaticPosition();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointerenter", onPointerEnter);
    window.addEventListener("resize", onViewportResize, { passive: true });
    window.addEventListener(EVENT_NAME, onMotionPreferenceChange);

    syncMotion(motionEnabled);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerenter", onPointerEnter);
      window.removeEventListener("resize", onViewportResize);
      window.removeEventListener(EVENT_NAME, onMotionPreferenceChange);
      stopAnimation();
    };
  }, []);

  return (
    <div className="cursor-light" aria-hidden="true">
      <div ref={haloRef} className="cursor-light__halo" />
      <div ref={glowRef} className="cursor-light__glow" />
    </div>
  );
}
