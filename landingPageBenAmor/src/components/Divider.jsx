import React from "react";

const Divider = ({ styles }) => {
  return (
    <div
      className={`w-[100px] h-0 ${styles} border-[3px] border-solid rounded`}
    ></div>
  );
};

export default Divider;
