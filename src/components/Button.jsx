const Button = ({ children, classname = "bg-black", id }) => {
  return (
    <button
      id={id}
      aria-label={id}
      className={`${classname} text-white px-[45px] py-[20px] rounded-full hover:bg-purple transition-colors duration-300 `}
    >
      {children}
    </button>
  );
};

export default Button;
