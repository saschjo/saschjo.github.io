import { useEffect, useRef, useState } from "react";
 
/**
 * Cursor
 *
 * Replaces the native cursor with a dot + lagging ring,
 * both using mix-blend-mode: difference.
 *
 * Usage:
 *   import Cursor from "./cursor.js";
 *   <Cursor />
 *
 * Props:
 *   ringSize      {number}  Default ring diameter in px         (default: 40)
 *   ringScale     {number}  Ring scale multiplier on mousedown  (default: 1.5)
 *   dotSize       {number}  Dot diameter in px                  (default: 8)
 *   dotScale      {number}  Dot scale multiplier on mousedown   (default: 1.8)
 *   lerpFactor    {number}  Ring lerp speed 0–1                 (default: 0.1)
 *   color         {string}  Blend color (works with difference) (default: "#ffffff")
 *   ringThickness {number}  Ring border width in px             (default: 1.5)
 */
export default function Cursor({
  ringSize      = 40,
  ringScale     = 1.5,
  dotSize       = 8,
  dotScale      = 1.8,
  lerpFactor    = 0.1,
  color         = "#ffffff",
  ringThickness = 1.5,
}) {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const rafRef  = useRef(null);
  const pos     = useRef({ mx: -999, my: -999, rx: -999, ry: -999 });
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
 
    const lerp = (a, b, t) => a + (b - a) * t;
 
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      // Drive dot position imperatively — no React re-render needed
      dot.style.left = `${e.clientX}px`;
      dot.style.top  = `${e.clientY}px`;
      setVisible(true);
    };
 
    const onDown = () => {
      dot.style.transform  = `translate(-50%, -50%) scale(${dotScale})`;
      ring.style.width     = `${ringSize * ringScale}px`;
      ring.style.height    = `${ringSize * ringScale}px`;
    };
 
    const onUp = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.width    = `${ringSize}px`;
      ring.style.height   = `${ringSize}px`;
    };
 
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
 
    window.addEventListener("mousemove",    onMove);
    window.addEventListener("mousedown",    onDown);
    window.addEventListener("mouseup",      onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
 
    const animate = () => {
      pos.current.rx = lerp(pos.current.rx, pos.current.mx, lerpFactor);
      pos.current.ry = lerp(pos.current.ry, pos.current.my, lerpFactor);
      ring.style.left = `${pos.current.rx}px`;
      ring.style.top  = `${pos.current.ry}px`;
      rafRef.current = requestAnimationFrame(animate);
    };
 
    rafRef.current = requestAnimationFrame(animate);
 
    return () => {
      window.removeEventListener("mousemove",    onMove);
      window.removeEventListener("mousedown",    onDown);
      window.removeEventListener("mouseup",      onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [dotScale, ringSize, ringScale, lerpFactor]);
 
  const base = {
    position:      "fixed",
    pointerEvents: "none",
    mixBlendMode:  "difference",
    zIndex:        9999,
    borderRadius:  "50%",
    transform:     "translate(-50%, -50%)",
    opacity:       visible ? 1 : 0,
    transition:    "opacity 0.2s ease",
    left:          -999,
    top:           -999,
  };
 
  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
 
      {/* Dot — snaps directly to pointer via imperative style mutations */}
      <div
        ref={dotRef}
        style={{
          ...base,
          width:      dotSize,
          height:     dotSize,
          background: color,
          transition: `${base.transition}, transform 0.08s ease`,
        }}
      />
 
      {/* Ring — lerps behind pointer via RAF loop */}
      <div
        ref={ringRef}
        style={{
          ...base,
          width:      ringSize,
          height:     ringSize,
          border:     `${ringThickness}px solid ${color}`,
          background: "transparent",
          transition: `${base.transition}, width 0.18s ease, height 0.18s ease`,
        }}
      />
    </>
  );
}