import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-28">
        <div className="basis-1/2">
          <h1 className="text-[10rem] tracking-tight font-semibold leading-none">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2  gap-16 flex">
          <div className="basis1/3">
            <h3 className="mb-5 text-lg capitalize text-zinc-400">Socials</h3>
            {["Instagram", "Twitter (x?)", "Linkedin"].map((item, index) => (
              <a className="block mt-3 text-zinc-500 capitalize cursor-pointer">
                {item}
              </a>
            ))}
          </div>
          <div className="basis1/3">
            <h3 className="mb-5 text-lg capitalize text-zinc-400">Sitemap</h3>
            {["Home", "Work", "Career", "Contact"].map((item, index) => (
              <a className="block mt-3 text-zinc-200 capitalize cursor-pointer">
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-end ">
            <p className="text-right">
              Refokus is a pioneering digital agency driven by design and
              empowered by teaching. Lorem ipsum dolor sit amet cons.
              Consequatur, omnis.
            </p>
            <img
              className="w-48 mt-10"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt="partner_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
