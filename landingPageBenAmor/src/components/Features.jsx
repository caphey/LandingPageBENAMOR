import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import Divider from "./Divider";
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index, backgroundColor }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${backgroundColor} p-8 `}
      key={index}
    >
      <img src={icon} alt="" className="w-[100px] h-[100px] mb-4 " />
      <h4
        className={`font-semibold text-secondary text-[16px] leading-8 sm:text-[21px] text-center`}
      >
        {title}
      </h4>
      <p className="font-normal text-[14px] leading-6 sm:text-[17px] text-center ">
        {content}
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo} gap-[32px]`}>
        <p className={`${styles.paragraph} text-secondary uppercase`}>
          our services
        </p>
        <h2 className={styles.heading2}>
          Experience The Power <br className="sm:block hidden" />
          Of <span className="text-secondary">Innovation</span>.
        </h2>
        <Divider />
        <p className={`${styles.paragraph} max-w-[600px]`}>
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque porro Neque porro quisquam est qui do
          lorem ipsum quia dolor sit amets ipsum
        </p>
        <Button
          title="VIEW ALL"
          backGround="bg-transparent"
          border="border-secondary"
          textColor="text-contrast"
        />
      </div>

      <div className={`${layout.sectionImg} md:mr-10 mr-0 `}>
        <div className={`grid sm:grid-cols-2 grid-cols-1 `}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
