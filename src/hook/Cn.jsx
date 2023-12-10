function cn(...args) {
  const classNamesArray = [];

  args.forEach((arg) => {
    if (typeof arg === "string") {
      classNamesArray.push(arg);
    } else if (typeof arg === "object") {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classNamesArray.push(key);
        }
      });
    }
  });

  return classNamesArray.join(" ");
}

export default cn;
