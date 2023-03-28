import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import Divider from "./Divider";
import { contacts } from "../constants";

const ContactCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex-row ${styles.flexCenter} ${
        index !== contacts.length - 1 ? "mb-6" : "mb-0"
      } `}
    >
      <div className={`w-[45px] h-[45px] ${styles.flexCenter} `}>
        <img src={icon} alt="" />
      </div>
      <div className="flex-1 flex flex-col ml-8">
        <h6 className={`${styles.paragraph} font-bold `}>{title}</h6>
        <p className="font-normal text-secondary text-[14px] ">{content}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} uppercase mb-8`}>
          get in <span className="text-secondary">touch</span>{" "}
        </h2>
        <Divider />
        <p className={`${styles.paragraph} max-w-[589px] mt-6 mb-16`}>
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque porro{" "}
        </p>

        {contacts.map((contact, index) => (
          <ContactCard key={contact.id} {...contact} index={index} />
        ))}
      </div>

      <div
        className={`${layout.sectionInfo} ${styles.flexCenter} md:mt-0 mt-16 relative`}
      >
        <div className="absolute z-[1] w-[927px] h-[869px] bottom-12 left-4 rounded-full  bg_gradient_form_top " />
        <form
          className={` ${styles.flexCenter} flex-col bg_gradient_form rounded-[34px] sm:px-16 sm:py-12 px-8 py-6 `}
        >
          <div className={`${styles.flexStart} flex-col mb-4`}>
            <label className={`${styles.paragraph} text-[17px] uppercase`}>
              your name
            </label>
            <input
              className=" appearance-none  w-full sm:w-96 py-2 px-3 bg-transparent border border-contrast mt-2"
              id="name"
              type="text"
            />
          </div>
          <div className={`${styles.flexStart} flex-col mb-4`}>
            <label className={`${styles.paragraph} text-[17px] uppercase`}>
              your email
            </label>
            <input
              className=" appearance-none  w-full sm:w-96 py-2 px-3 bg-transparent border border-contrast mt-2"
              id="email"
              type="email"
            />
          </div>
          <div className={`${styles.flexStart} flex-col mb-6`}>
            <label className={`${styles.paragraph} text-[17px] uppercase`}>
              your message
            </label>
            <textarea
              className=" appearance-none  w-full sm:w-96 h-[178px] py-2 px-3 bg-transparent border border-contrast mt-2"
              id="message"
            ></textarea>
          </div>
          <div className={styles.flexCenter}>
            <Button
              title="SEND MESSAGE"
              backGround="bg-secondary"
              textColor="text-primary"
              border="border-none"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
