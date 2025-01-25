import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mariem</h1>
        <p className={styles.description}>
          I'm a full stack developer
          </p>
        <a className={styles.contactBtn} 
          href="mailto:mariem.charef@enicar.ucar.tn">
          Contact me
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
