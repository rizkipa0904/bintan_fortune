import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width="28"
      height="36"
      viewBox="0 0 28 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 36V1.755C0 1.245 0.172484 0.825 0.51745 0.495C0.863619 0.165 1.29212 0 1.80296 0C2.3138 0 2.7423 0.1722 3.08847 0.5166C3.43344 0.8622 3.60592 1.29 3.60592 1.8V3.6H26.188C26.8191 3.6 27.3149 3.8628 27.6755 4.3884C28.0361 4.9128 28.0962 5.475 27.8558 6.075L25.2415 12.6L27.8558 19.125C28.0962 19.725 28.0361 20.2872 27.6755 20.8116C27.3149 21.3372 26.8191 21.6 26.188 21.6H3.60592V36H0ZM13.5222 16.2C14.5138 16.2 15.363 15.8472 16.0698 15.1416C16.7754 14.4372 17.1281 13.59 17.1281 12.6C17.1281 11.61 16.7754 10.7622 16.0698 10.0566C15.363 9.3522 14.5138 9 13.5222 9C12.5306 9 11.682 9.3522 10.9764 10.0566C10.2697 10.7622 9.91629 11.61 9.91629 12.6C9.91629 13.59 10.2697 14.4372 10.9764 15.1416C11.682 15.8472 12.5306 16.2 13.5222 16.2ZM3.60592 18H23.5287L21.3651 12.6L23.5287 7.2H3.60592V18Z"
        fill="#7620FF"
      />
    </svg>
  );
}

export default SvgComponent;
