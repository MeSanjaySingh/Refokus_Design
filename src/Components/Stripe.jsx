import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-full border-t-[1px] flex justify-between items-center border-b-[1px] border-r-[1px] border-zinc-700 px-[2.5em] py-[1.5em]">
      <img src={val.url} alt="" />
      <span className="font-semibold text-[1.5em]">{val.number}</span>
    </div>
  );
};

export default Stripe;
