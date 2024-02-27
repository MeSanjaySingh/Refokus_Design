import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl border-b-[2px] border-zinc-700 mx-auto py-5 flex items-center justify-between">
      <div className="nav-left   flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />
        <div className="links flex gap-14 ml-24">
          {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[1px] h-6 bg-zinc-400"></span>
            ) : (
              <a
                key={index}
                className="font- text-base flex items-center gap-1 "
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.20em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
