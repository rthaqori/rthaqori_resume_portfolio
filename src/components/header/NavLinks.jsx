import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const NavLinks = () => {
  return (
    <div className="rounded-full">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative ml-auto flex h-16 items-center bg-heroBackground px-10 py-1 dark:bg-dark"
    >
      <div className="flex h-16 items-center justify-center text-3xl font-bold dark:text-white">
        <a href="">rthaqori</a>
      </div>
      <div className="ml-auto flex items-center">
        <a href="#">
          <Tab setPosition={setPosition}>Home</Tab>
        </a>
        <a href="#about">
          <Tab setPosition={setPosition}>About</Tab>
        </a>
        <a href="#projects">
          <Tab setPosition={setPosition}>Projects</Tab>
        </a>
        <Tab setPosition={setPosition}>Contact</Tab>
        <Cursor position={position} />
      </div>
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white mix-blend-difference md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-9 rounded-full bg-dark dark:bg-white"
    />
  );
};
