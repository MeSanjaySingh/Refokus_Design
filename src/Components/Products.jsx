import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import video1 from "../assets/1.webm";
import video2 from "../assets/2.webm";
import video3 from "../assets/3.mp4";
import video4 from "../assets/4.webm";
import video5 from "../assets/5.webm";

const Products = () => {
  var products = [
    {
      title: "arquitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
  ];

  const [position, setPosition] = useState(0);
  const hover = (val) => {
    setPosition(val * 22);
  };

  return (
    <div className="mt-20 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} hover={hover} count={index} />
      ))}
      <div className="absolute top-0 pointer-events-none w-full h-full">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[22rem] left-[44%] rounded-md -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full rounded-lg "
          >
            <video autoPlay muted src={video1}></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted src={video2}></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted src={video3}></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video autoPlay muted src={video4}></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video autoPlay muted src={video5}></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
