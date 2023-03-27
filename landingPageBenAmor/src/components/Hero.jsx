import React from "react";
import styles from "../style";
import { hero } from "../assets";
import Divider from "./Divider";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col bg_gradient_header ${styles.paddingHero}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:p-16 p-6 gap-[43px]`}
      >
        <p
          className={`${styles.paragraph} text-secondary uppercase leading-[31.5px] `}
        >
          Welcome to Creatic
        </p>

        <h1 className=" flex-1 font-semibold ss:text-[80px] text-[52px] ss:leading-[89px] leading-[75px] uppercase w-full ">
          we are <span className="text-secondary">creative</span>
          <br className="sm:block hidden" /> design agency
        </h1>
        <Divider styles="border-secondary" />
        <p className={`${styles.paragraph} max-w-[700px] `}>
          Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit Neque porro elit Neque porro quis
          ipsum
        </p>
        <Button
          title="GET IN TOUCH"
          backGround="bg-transparent"
          border="border-secondary"
          textColor="text-contrast"
        />
      </div>

      <div className={`flex-1 ${styles.flexEnd} md:my-0 mt-10 `}>
        <img
          src={hero}
          alt="hero"
          className="w-full h-full z-10 object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
