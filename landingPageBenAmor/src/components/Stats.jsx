import React from "react";
import styles, { layout } from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} sm:flex-row flex-col flex-wrap ${styles.paddingY}  `}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`${styles.flexCenter} flex-col flex-1 ${
            index === stats.length - 1 ? "mb-0" : "mb-4"
          }  `}
        >
          <img src={stat.img} className="w-[100px] h-[100px] " alt="stat_img" />
          <h4 className="sm:text-[64px] text-[48px] leading[0px] font-bold ">
            {stat.value}
          </h4>
          <p className={`${styles.paragraph} text-secondary`}>{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
