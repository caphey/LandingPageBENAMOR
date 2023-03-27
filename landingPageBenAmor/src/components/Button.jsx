import React from "react";

const Button = ({ title, backGround, textColor, border }) => {
  return (
    <div
      className={`py-3 px-6 ${backGround} font-normal text-[17px] leading-[26px] ${textColor} border-[3px] ${border} rounded-sm cursor-pointer font-medium `}
    >
      {title}
    </div>
  );
};

export default Button;
