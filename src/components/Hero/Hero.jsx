import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mariem</h1>
        <h2 className={styles.description}>
          Software Engineering Student | Full Stack Developer
        </h2>
        <p>
          Building scalable web apps and fostering competitive programming skills
        </p>
        <a href="/assets/resume.pdf" target="_blank">
          <button className={styles.resumeBtn}>Resume</button>
        </a>
      </div>

      <img
        className={`${styles.heroImg} ${styles.img}`}
        src="/assets/hero/mariem.png"
        alt="Mariem Charef"
      />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
