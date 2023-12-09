import Image from "../assets/image-amy.webp";
import Button from "./Button";
import OvalIcon from "./Icons";

const AboutMe = () => {
  return (
    <section className=" relative container mt-[112px] flex items-center justify-between gap-x-[125px]">
      <img
        width={445}
        height={445}
        className="w-[445px] aspect-square"
        src={Image}
        alt="Amy Photo"
      />
      <OvalIcon className=" animate-spin-slow absolute w-[64px] left-[65px] top-[103px]" />

      <div>
        <h2 className=" max-w-[19ch]">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p className=" mt-[34px] mb-[32px]">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button classname="bg-pink">Free Consultation</Button>
      </div>
    </section>
  );
};

export default AboutMe;
