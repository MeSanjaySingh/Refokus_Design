import React from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="w-44 rounded-full text-black px-4 py-2 flex items-center justify-around bg-zinc-100">
      <span className="text-sm ml-2"> {title} </span>
      <FaArrowTurnUp className="rotate-90" size={13} />
    </div>
  );
};

export default Button;
