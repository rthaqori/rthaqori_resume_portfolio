import React, { useEffect, useRef, useState } from "react";

const arrayColors = ["#eee", "#545454", "#596d91", "#bb5a68", "#696541"];

const Banner = () => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const overlayRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const createDots = () => {
      const newDots = [];
      for (let i = 0; i < 50; i++) {
        newDots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * arrayColors.length)],
        });
      }
      dotsRef.current = newDots;
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsRef.current.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawLines = (mouseX, mouseY) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
      dotsRef.current.forEach((dot) => {
        const distance = Math.sqrt(
          (mouseX - dot.x) ** 2 + (mouseY - dot.y) ** 2,
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      });
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      drawLines(mouse.x, mouse.y);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDots();
      drawDots();
    };

    const handleMouseEnter = () => {
      setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
      drawDots(); // Redraw dots to clear lines
    };

    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createDots();
    drawDots();

    window.addEventListener("resize", handleResize);

    const overlay = overlayRef.current;
    overlay.addEventListener("mousemove", handleMouseMove);
    overlay.addEventListener("mouseenter", handleMouseEnter);
    overlay.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      overlay.removeEventListener("mousemove", handleMouseMove);
      overlay.removeEventListener("mouseenter", handleMouseEnter);
      overlay.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <main className="relative flex h-screen flex-col items-center justify-center gap-5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-center">
      <div className="absolute inset-0">
        <canvas
          ref={canvasRef}
          className="pointer-events-none h-full w-full"
        ></canvas>
        <div
          ref={overlayRef}
          className="pointer-events-auto absolute inset-0"
        ></div>
      </div>
      <div className="relative z-10">
        <h5 className="text-gray-300">@Lundeveloper</h5>
        <div>
          <h1 className="bg-gradient-to-l from-blue-300 via-pink-500 to-yellow-200 bg-clip-text text-4xl font-bold text-transparent">
            ANIMATION spider man
          </h1>
          <h1 className="bg-gradient-to-r from-blue-300 via-pink-500 to-yellow-200 bg-clip-text text-4xl font-bold text-transparent">
            using JavaScript
          </h1>
        </div>
        <h4 className="mt-2">
          Subscribe to the channel to continuously
          <br />
          update interesting videos
        </h4>
        <button className="mt-5 rounded-full border border-gray-400 px-5 py-2 transition-all hover:text-gray-900 hover:shadow-lg">
          Subscribe Now &#8599;
        </button>
      </div>
    </main>
  );
};

export default Banner;
