"use client";

import { useEffect, useRef } from "react";

const INITIAL_X = 0.5;
const INITIAL_Y = 0.25;

/**
 * Live ambient light that tracks the pointer on fine-pointer devices.
 * Touch/coarse-pointer devices keep the glow fixed. Reduced-motion users do too.
 */
export function CursorLight() {
  const glowRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const halo = haloRef.current;
    if (!glow || !halo) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setStaticPosition = () => {
      const x = window.innerWidth * INITIAL_X;
      const y = window.innerHeight * INITIAL_Y;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      halo.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    if (!finePointer.matches || reducedMotion.matches) {
      setStaticPosition();
      return;
    }

    let targetX = window.innerWidth * INITIAL_X;
    let targetY = window.innerHeight * INITIAL_Y;
    let glowX = targetX;
    let glowY = targetY;
    let haloX = targetX;
    let haloY = targetY;
    let raf = 0;
    let active = true;

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

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!raf) raf = requestAnimationFrame(render);
    };

    const onPointerLeave = () => {
      active = false;
    };

    const onPointerEnter = () => {
      active = true;
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onViewportResize = () => {
      if (!active) return;
      targetX = Math.min(targetX, window.innerWidth);
      targetY = Math.min(targetY, window.innerHeight);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointerenter", onPointerEnter);
    window.addEventListener("resize", onViewportResize, { passive: true });

    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerenter", onPointerEnter);
      window.removeEventListener("resize", onViewportResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cursor-light" aria-hidden="true">
      <div ref={haloRef} className="cursor-light__halo" />
      <div ref={glowRef} className="cursor-light__glow" />
    </div>
  );
}
