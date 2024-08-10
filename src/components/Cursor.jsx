import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [animate, setAnimate] = useState(true);
  const timeoutRef = useRef(null); // Ref to store the timeout ID

  useEffect(() => {
    // Set initial position of the cursor when the component mounts
    if (cursorRef.current) {
      const { innerWidth, innerHeight } = window;
      cursorRef.current.style.transform = `translate(${innerWidth - 108}px, ${innerHeight - 108}px)`;
    }

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 13}px, ${e.clientY - 13}px)`;
        cursorRef.current.style.transition = "none"; // Remove transition for normal mouse movement
        setAnimate(false);

        // Clear the previous timeout if any
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Set a new timeout to move the cursor back after 5 seconds of inactivity
        timeoutRef.current = setTimeout(() => {
          const { innerWidth, innerHeight } = window;
          cursorRef.current.style.transform = `translate(${innerWidth - 108}px, ${innerHeight - 108}px)`;
          cursorRef.current.style.transition = "transform 0.5s"; // Apply bounce animation
          setAnimate(true);
        }, 5000);
      }
    };

    const handleMouseOut = (e) => {
      if (cursorRef.current && e.relatedTarget === null) {
        const { innerWidth, innerHeight } = window;
        cursorRef.current.style.transform = `translate(${innerWidth - 108}px, ${innerHeight - 108}px)`;
        cursorRef.current.style.transition = "transform 2s"; // Apply bounce animation
        setAnimate(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);

      // Clear the timeout when the component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999999999] mix-blend-difference"
    >
      <div
        className={`pointer-events-none absolute h-[26px] w-[26px] rounded-full bg-white ${
          animate ? "animate-bounce transition-transform" : ""
        }`}
      ></div>
    </div>
  );
};

export default Cursor;
