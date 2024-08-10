import React from "react";
import { FlipLink } from "./FooterLinks";
import GmailPng from "../../assets/gmail.png";
import LinkdenSvg from "../../assets/linkedin-dark.svg";
import Container from "../UtilComponents/Container";

const Footer = () => {
  return (
    <div className="w-full rounded-t-[50px] bg-gray-900 text-heroBackground">
      <Container>
        <div className="py-8 pb-2 md:p-10">
          <div className="flex flex-col gap-4 px-6 text-xl font-bold md:text-4xl">
            <div className="flex justify-end gap-3">
              <p>
                Let's make some <span className="italic">Magic</span>{" "}
                <span className="uppercase italic tracking-wider">
                  (Together)
                </span>
              </p>
            </div>
            <div className="flex justify-start">
              <p>
                <a
                  href="mailto:ramanthaqori@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase"
                >
                  ramanthaqori@gmail.com
                </a>
              </p>
            </div>
          </div>

          <hr className="mb-4 mt-6 border-heroBackground md:my-10" />

          <div className="flex w-full flex-col justify-between px-6 pb-6 md:flex-row">
            <div className="flex flex-col">
              <div className="flex flex-col items-start gap-2 rounded-[10vh] px-6 py-3 text-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:mt-4">
                <a
                  href="mailto:ramanthaqori@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                >
                  <img
                    src={GmailPng}
                    className="w-6 transition-transform duration-200 ease-in-out group-hover:scale-125"
                    alt="Gmail"
                  />
                  ramanthaqori@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/raman-shreenet-thakuri-4752402b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                >
                  <img
                    src={LinkdenSvg}
                    className="w-6 scale-125 transition-transform duration-200 ease-in-out group-hover:scale-150"
                    alt=""
                  />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-3 px-6 py-3 uppercase">
              <FlipLink href="#">Home</FlipLink>
              <FlipLink href="#about">About</FlipLink>
              <FlipLink href="#projects">Projects</FlipLink>
            </div>

            <div className="flex items-end px-6 py-3 text-lg">
              <p>Copyright &#169; 2023 Raman Thakuri. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
