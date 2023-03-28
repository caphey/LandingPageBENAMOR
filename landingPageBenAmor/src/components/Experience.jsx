import React from "react";
import styles, { layout } from "../style";
import Divider from "./Divider";
import Button from "./Button";
import { listExperience } from "../constants";
import { iconExperience } from "../assets";

const List = ({ title, index }) => {
  return (
    <div
      className={`flex flex-row mb-2 ${
        index !== listExperience.length - 1 ? "mb:6" : "mb-0"
      } feature-card`}
    >
      <img src={iconExperience} alt="" className="" />
      <p className={`${styles.paragraph} ml-4`}>{title}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className=" flex justify-center items-center flex-col relative">
          <p className={`${styles.paragraph} uppercase mb-2 text-center`}>
            why us
          </p>
          <Divider styles="border-secondary" />
          <div className="absolute z-[1] w-[927px] h-[869px] bottom--1 rounded-full  bg_gradient_experience_top" />
        </div>
        <h2 className={`${styles.heading2} uppercase mt-6 mb-12`}>
          25 years of <span className="text-secondary">experience</span>
          <br className="sm:block hidden" /> as a creative agency
        </h2>
        <Button
          title="READ MORE"
          backGround="bg-transparent"
          border="border-secondary"
          textColor="text-contrast"
        />
      </div>

      <div className={`${layout.sectionInfo} md:mt-0 mt-16 relative`}>
        <p className={`${styles.paragraph} max-w-[564px] mb-8`}>
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque porro Lorem ipsum
        </p>

        {listExperience.map((element, index) => (
          <List key={element.id} {...element} index={index} />
        ))}

        <div className="absolute z-[1] w-[927px] h-[869px] bottom--1 rounded-full  bg_gradient_experience_bottom " />
      </div>
      <div></div>
    </section>
  );
};

export default Experience;
