import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center px-20 w-full h-[5vh] py-2 bg-orange-500">
      <p className="text-white">
        Design by
        <span className="font-bold hover:text-lg">
          <a href="https://github.com/jhonaquejadau" target="_blank">
            {` <jaqudev_/>`}
          </a>
        </span>
      </p>
      <div className="ml-auto flex flex-row justify-center gap-6">
        <a href="https://github.com/jhonaquejadau" target="_blank">
          <img src={github} alt="github" className="w-8 h-8 hover:cursor-pointer hover:scale-[1.1]"/>
        </a>
        <a
          href="https://www.linkedin.com/in/jhon-alexander-quejada-urrutia-022763230/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" className="w-8 h-8 hover:cursor-pointer hover:scale-[1.1]"/>
        </a>
        <a href="https://twitter.com/jaqudev_" target="_blank">
          <img src={twitter} alt="twitter" className="w-8 h-8 hover:cursor-pointer hover:scale-[1.1]"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
