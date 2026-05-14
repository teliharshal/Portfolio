import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);
    const onDown  = () => setIsClicking(true);
    const onUp    = () => setIsClicking(false);

    // Detect hoverable elements
    const onHoverStart = (e) => {
      const el = e.target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor='pointer']");
      setIsHovering(!!el);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onHoverStart);

    // Smooth ring follows with lerp
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      setPos((prev) => ({
        x: lerp(prev.x, targetRef.current.x, 0.12),
        y: lerp(prev.y, targetRef.current.y, 0.12),
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onHoverStart);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring — lags behind for smooth trail */}
      <motion.div
        animate={{
          x: pos.x - (isHovering ? 20 : 16),
          y: pos.y - (isHovering ? 20 : 16),
          width:  isHovering ? 40 : 32,
          height: isHovering ? 40 : 32,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : 1,
          backgroundColor: isHovering ? "rgba(79,70,229,0.12)" : "transparent",
          borderColor: isHovering ? "rgba(79,70,229,0.8)" : "rgba(79,70,229,0.5)",
        }}
        transition={{ type: "tween", duration: 0, ease: "linear" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          border: "1.5px solid",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "normal",
        }}
      />

      {/* Inner dot — snaps instantly */}
      <motion.div
        animate={{
          x: dotPos.x - (isClicking ? 3 : 2),
          y: dotPos.y - (isClicking ? 3 : 2),
          width:  isClicking ? 6 : 4,
          height: isClicking ? 6 : 4,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? "#4F46E5" : "#4F46E5",
        }}
        transition={{ type: "tween", duration: 0, ease: "linear" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
