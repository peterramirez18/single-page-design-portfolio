import Button from "./Button";

const CallWithMe = () => {
  return (
    <section className="container mt-[88px] bg-black rounded-[10px] text-white flex justify-between pl-[65px] pt-[79px] pr-[95px] pb-[80px]  items-center">
      <div>
        <h2>Book a call with me</h2>
        <p className=" max-w-[41ch] mt-[26px]">
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
      </div>
      <Button classname="bg-pink">Free Consultation</Button>
    </section>
  );
};

export default CallWithMe;
