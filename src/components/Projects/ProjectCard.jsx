import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ p: { title, images, description, skills, source, link } }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className={styles.container}>
      <img src={images[currentImageIndex]} alt={`${title} - Image ${currentImageIndex + 1}`} className={styles.image} />
      {images.length > 1 && (
        <>
          <button onClick={prevImage} className={styles.navButton}>
            &#8249;
          </button>
          <button
            onClick={nextImage}
            className={styles.navButton}
            style={{ right: '10px' }}
          >
            &#8250;
          </button>
          <div className={styles.dots}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`${styles.dot} ${idx === currentImageIndex ? styles.activeDot : ''}`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

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
            Link
          </a>
        )}
      </div>
    </div>
  );
};