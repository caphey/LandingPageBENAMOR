import React from "react";

const Button = ({ title }) => {
  return (
    <div
      className={`py-3 px-6 bg-transparent font-normal text-[17px] leading-[26px] text-contrast border-[3px] border-secondary rounded-sm`}
    >
      {title}
    </div>
  );
};

export default Button;
