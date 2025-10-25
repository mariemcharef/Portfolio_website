import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ p: { title, imageSrc, description, skills, source, link } }) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={title} className={styles.image} />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((s, id) => (
          <li key={id} className={styles.skill}>
            {s}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {source && (
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        )}

        {link && (
          <a
            href={link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
