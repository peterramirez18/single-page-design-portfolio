export const IconOval = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 64 64",
    }}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      d="M58.7 23.5C59.5 26.2 60 29 60 32c0 15.5-12.5 28-28 28S4 47.5 4 32 16.5 4 32 4c3.6 0 7.1.7 10.3 1.9"
      style={{
        fill: "none",
        stroke: "#030303",
        strokeWidth: 8,
      }}
    />
  </svg>
);

export const IconArrowLeft = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} {...props}>
    <path
      fill="#FFF"
      d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.121-5.12z"
    />
  </svg>
);
