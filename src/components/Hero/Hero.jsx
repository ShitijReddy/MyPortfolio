import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shitij</h1>
        <p className={styles.description}>
        I'm a passionate Software Engineer specializing in developing scalable web and mobile applications. With expertise in Angular and React Native Frameworks, I create intuitive, user-friendly interfaces. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:reddyshitij@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/shitij_img.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
