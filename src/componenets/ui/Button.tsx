import React from "react";

interface ButtonProps {
  onClick: () => void;
  backgroundColor: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, backgroundColor, text }) => {
  const buttonStyles = `inline-block rounded px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring ${backgroundColor}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
