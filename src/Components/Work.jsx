import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "53%",
      left: "48%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    const ImagesShow = (arr) => {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    };
    switch (Math.floor(data * 100)) {
      case 0:
        ImagesShow([]);
        break;
      case 1:
        ImagesShow([0]);
        break;
      case 2:
        ImagesShow([0, 1]);
        break;
      case 3:
        ImagesShow([0, 1, 2]);
        break;
      case 4:
        ImagesShow([0, 1, 2, 3]);
        break;
      case 5:
        ImagesShow([0, 1, 2, 3, 4]);
        break;
      default: {
        console.log("No Images");
      }
      // case 6:
      //   ImagesShow([0, 1, 2, 3, 5]);
      //   break;
    }
  });

  return (
    <div className="w-full bg-zinc-900 mt-10 ">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[36em] select-none font-medium leading-none tracking-normal">
          work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="w-72 absolute rounded-2xl select-none -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt="work_img"
                ></img>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
