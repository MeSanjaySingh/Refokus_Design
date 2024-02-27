import React from "react";
import Button from "./Button";

const Product = ({ val, hover, count }) => {
  return (
    <div className="w-full py-20 h-[22rem]  text-white">
      <div
        onMouseEnter={() => {
          hover(count);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl capitalize font-semibold ">{val.title}</h1>
        <div className="detail w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-10">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
