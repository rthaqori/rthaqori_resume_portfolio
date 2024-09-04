import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const NavLinks = () => {
  return (
    <div className="rounded-full">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex h-16 items-center px-4 py-1 dark:bg-dark sm:px-6 md:px-8 lg:px-10"
    >
      <div className="flex h-16 items-center justify-center text-3xl font-bold dark:text-white">
        <a href="">rthaqori</a>
      </div>
      <div className="ml-auto hidden items-center md:flex">
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

      <div className="ml-auto md:hidden">
        <div>
          <button onClick={toggleMenu}>
            <MenuIcon fontSize="large" className="dark:text-heroBackground" />
          </button>
        </div>
        <div
          className={`absolute top-0 h-screen w-4/5 bg-gray-800 px-4 py-5 text-4xl font-semibold text-heroBackground shadow-2xl backdrop-blur-3xl transition-all duration-500 ease-in-out dark:bg-white dark:text-[#111111] sm:px-6 md:px-8 lg:px-10 ${open ? "right-0" : "-right-full"}`}
        >
          <div className="mb-8 flex justify-end">
            <button onClick={toggleMenu}>
              <CloseIcon fontSize="large" />
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
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
