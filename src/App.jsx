// App.js
import React, { useEffect, useState } from "react";
import { useDarkMode } from "./components/DarkModeContext";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import { motion } from "framer-motion";

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const modeImg = darkMode ? "./assets/moon.svg" : "./assets/sun.svg";

  return (
    <div className="overflow-hidden bg-white dark:bg-dark">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 4.5 }}
      >
        {width > 1024 && <Cursor />}
      </motion.div>
      <Hero />
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full md:bottom-10 md:right-10 md:h-6 md:w-6"
      >
        <img className="" src={modeImg} alt="modeImg" />
      </button>
    </div>
  );
};

export default App;
