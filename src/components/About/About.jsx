import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>

      <div className={styles.content}>
        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <img
              src={"/assets/about/enic.png"}
              alt="National Engineering School of Carthage logo"
              className={styles.schoolLogo}
            />
            <div className={styles.details}>
              <div className={styles.date}>Sep 2023 – Present</div>
              <h3>National Engineering School of Carthage</h3>
              <h4>Engineering Degree in Computer Science</h4>
              <p>
                Tunis, Tunisia
                <br />
                <strong>Key Courses:</strong> OOP, Modeling, Algorithms, Data Structures, Networking, Java, C/C++
              </p>
            </div>
          </li>

          {/* IPEIN */}
          <li className={styles.aboutItem}>
            <img
              src={"/assets/about/ipein.png"}
              alt="Preparatory Institute for Engineering Studies of Nabeul logo"
              className={styles.schoolLogo}
            />
            <div className={styles.details}>
              <div className={styles.date}>Sep 2021 – Jun 2023</div>
              <h3>Preparatory Institute for Engineering Studies of Nabeul</h3>
              <h4>Preparatory Cycle in Mathematics and Physics</h4>
              <p>
                Nabeul, Tunisia
                <br />
                <strong>Key Courses:</strong> Mathematical Analysis, Linear Algebra, Physics
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
