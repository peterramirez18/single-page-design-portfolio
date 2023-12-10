const Button = ({ children, classname = "bg-black" }) => {
    return (
        <button id="btn" aria-label="btn"  className={`${classname} text-white px-[45px] py-[20px] rounded-full hover:bg-purple transition-colors duration-300 `}>
            {children}
        </button>
    )
}

export default Button