import React from "react";
import styles, { layout } from "../style";
import Divider from "./Divider";
import Button from "./Button";
import { about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
      className={`${layout.sectionReverse} bg_gradient_about `}
    >
      <div className={layout.sectionImgReverse}>
        <img src={about} alt="" className="w-full h-full object-cover" />
      </div>

      <div className={`${layout.sectionInfo} gap-[26px] `}>
        <p className={`${styles.paragraph} text-secondary uppercase`}>
          about us
        </p>
        <h2 className={styles.heading2}>
          We Bring <span className="text-secondary">Creative</span> Ideas To
          Life.
        </h2>
        <Divider styles="border-contrast" />
        <p className={`${styles.paragraph} text-secondary`}>We Love Creative</p>
        <p className={`${styles.paragraph} max-w-[700px]`}>
          Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque porro Lorem ipsum Neque porro <br />{" "}
          <br />
          Neque porro Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Lorem ipsum Neque quis ipsum
        </p>
        <Button
          title="READ MORE"
          backGround="bg-transparent"
          border="border-secondary"
          textColor="text-contrast"
        />
      </div>
    </section>
  );
};

export default About;
