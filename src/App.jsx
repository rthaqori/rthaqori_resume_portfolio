// App.js
import React, { useEffect, useState } from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import { motion } from "framer-motion";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <DarkModeProvider>
      <div className="overflow-hidden bg-white dark:bg-dark">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 4.5 }}
        >
          {width > 1024 && <Cursor />}
        </motion.div>
        <Hero />
      </div>
    </DarkModeProvider>
  );
};

export default App;
