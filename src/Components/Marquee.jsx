import React from "react";

const Marquee = ({ imagesurl }) => {
  return <div className="flex w-full py-5 px-2 gap-9 whitespace-nowrap overflow-hidden">
    {imagesurl.map((url=><img src={url} className=" w-28 flex-shrink-0"/>))}
    {imagesurl.map((url=><img src={url} className=" w-28 flex-shrink-0"/>))}
  </div>;
};

export default Marquee;
