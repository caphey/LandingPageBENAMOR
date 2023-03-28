import React from "react";
import styles, { layout } from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import Divider from "./Divider";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingY} ${layout.sectionInfo} items-center w-full relative `}
    >
      <div className="absolute z-[1] w-[1304px] h-[87px] bottom-0 rounded-full  bg_gradient_footer " />
      <img src={logo} alt="logo" className="w-[244px] h-[94px] mb-4" />
      <Divider />

      <ul
        className={`list-none flex md:flex-row flex-col justify-center items-center flex-1 py-6 `}
      >
        {footerLinks.map((footerLink, index) => (
          <li
            key={footerLink.id}
            className={`font-normal cursor-pointer text-[21px] md:mb-0 mb-4${
              index === footerLinks.length - 1 ? "mr-0" : " md:mr-10 mr-0"
            }`}
          >
            <a href={footerLink.id} className="text-secondary">
              {footerLink.title}
            </a>
          </li>
        ))}
      </ul>

      <p className={`${styles.paragraph} max-w-[700px] text-center `}>
        Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
        amet, Neque porro elit NeDque
      </p>

      <ul
        className={`list-none flex xs:flex-row flex-col justify-center items-center flex-1 py-6 mb-48 `}
      >
        {socialMedia.map((media, index) => (
          <li
            key={media.id}
            className={`cursor-pointer xs:mb-0 mb-8 ${
              index === socialMedia.length - 1 ? "mr-0" : " xs:mr-10 mr-0"
            }`}
          >
            <img
              src={media.icon}
              alt=""
              className="xs:w-full xs:h-full w-6 h-6 "
            />
          </li>
        ))}
      </ul>

      <p className=" text-sm font-light ">
        Copyright © 2003-2023 Creatic Agency All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
