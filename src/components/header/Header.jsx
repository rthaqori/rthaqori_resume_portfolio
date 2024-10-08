import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { NavLinks } from "./NavLinks";
import Container from "../UtilComponents/Container";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-80%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-50 w-full bg-white/30 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-sm dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.1),0px_1px_0px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
    >
      <div className="flex w-full items-center justify-center bg-heroBackground">
        <nav className="max-w-9xl w-full">
          <NavLinks />
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
