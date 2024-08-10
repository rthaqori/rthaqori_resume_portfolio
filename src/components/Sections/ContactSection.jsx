import GmailPng from "../../assets/email.png";
import LinkdenSvg from "../../assets/linkedin-light.svg";
import Container from "../UtilComponents/Container";

const ContactSection = () => {
  return (
    <Container>
      <section
        className="flex flex-col items-center justify-center gap-4 p-16"
        id="contact"
      >
        <p className="text-lg">Get in touch</p>
        <span className="text-5xl font-bold">Contact Me</span>
        <div className="flex items-center justify-center gap-4 rounded-[10vh] border border-black px-6 py-3 text-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <a
            href="mailto:ramanthaqori@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1"
          >
            <img
              src={GmailPng}
              className="h-12 transition-transform duration-200 ease-in-out group-hover:scale-110"
              alt="Gmail"
            />
            ramanthaqori@gmail.com
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/raman-shreenet-thakuri-4752402b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1"
          >
            <img
              src={LinkdenSvg}
              className="h-12 transition-transform duration-200 ease-in-out group-hover:scale-110"
              alt=""
            />
            LinkedIn
          </a>
        </div>
      </section>
    </Container>
  );
};

export default ContactSection;
