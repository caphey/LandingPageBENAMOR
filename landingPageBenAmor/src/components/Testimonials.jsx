import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import Divider from "./Divider";
import {
  testimonial,
  testimonials__bg_1,
  testimonials__bg_2,
  quote,
} from "../assets";

const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} grid lg:grid-cols-3 grid-cols-1 `}>
      <div className={`flex-1 flex ${styles.flexCenter} lg:block hidden `}>
        <img
          src={testimonials__bg_1}
          alt="testimonial__bg_1"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="flex flex-1 justify-start items-center flex-col sm:px-8 px-4 gap-[12px]">
        <h2 className={`${styles.heading2} uppercase text-center mt-8 `}>
          what <span className="text-secondary">our</span>
          <br className="sm:block hidden" /> clients say
        </h2>
        <Divider />
        <p className={`${styles.paragraph} uppercase`}>testimonials</p>
        <div
          className={`${styles.flexCenter} flex-col px-16 py-8 bg_gradient_testimonials rounded-[32px] mt-16 mb-8 `}
        >
          <p className={styles.paragraph}>
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
            sit amet, Neque porro elit
          </p>
          <div className={`${styles.flexCenter} sm:flex-row flex-col mt-6`}>
            <img
              src={testimonial}
              className="w-[75%] h-[75%] object-cover"
              alt=""
            />
            <div
              className={`flex-col ${styles.flexCenter} sm:ml-4 sm:mr-16 mt-4 `}
            >
              <h6 className={`${styles.paragraph} font-bold `}>Carol Chaves</h6>
              <p className="font-normal text-secondary text-[14px] ">
                @caroles.gmail.com
              </p>
            </div>
            <img
              src={quote}
              className="w-[40px] h-[30px] object-cover sm:mt-0 mt-4 "
              alt=""
            />
          </div>
        </div>
        <Button
          title="VIEW ALL TESTIMONIALS"
          backGround="bg-transparent"
          border="border-secondary"
          textColor="text-contrast"
        />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} lg:block hidden`}>
        <img
          src={testimonials__bg_2}
          alt="testimonial__bg_2"
          className="w-full h-full "
        />
      </div>
    </section>
  );
};

export default Testimonials;
