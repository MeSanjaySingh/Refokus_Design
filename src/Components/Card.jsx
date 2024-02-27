import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover = "false" }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 rounded-2xl flex flex-col cursor-pointer select-none justify-between ${width}   min-h-[27rem]`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Get in Touch</h3>
          <IoIosArrowRoundForward size={25} />
        </div>
        <h1 className="text-3xl font-medium mt-5">
          Let’s get to it, together.
        </h1>
      </div>
      <div className="bottom w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold leading-none tracking-tight">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1.5px] border-zinc-200">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-400 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
