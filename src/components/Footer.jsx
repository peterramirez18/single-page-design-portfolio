import Button from "./Button";
import Logo from "../assets//logo.svg";

const Footer = () => {
  return (
    <footer className="mt-[57px] mb-[64px] container flex items-center justify-between ">
      <img width={64} height={64} src={Logo} alt="Logo" />
      <Button id={"footer-btn"}>Free Consultation</Button>
    </footer>
  );
};

export default Footer;
