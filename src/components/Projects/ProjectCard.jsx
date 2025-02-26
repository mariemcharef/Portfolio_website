import React from 'react'
    import styles from "./ProjectCard.module.css";
export const ProjectCard = ({p:{ title, imageSrc, description, skills, source }}) => {
  return (
        
        <div className={styles.container}>
            <img src={imageSrc} className={styles.image} />
            <h3  className={styles.title}>{title}</h3> 
            <p  className={styles.description}>{description}</p>   
            <ul className={styles.skills}>
                {
                    skills.map((s,id)=>{
                        return(<li key={id}  className={styles.skill}>{s}</li>)
                    })
                }
            </ul>
            <div className={styles.links}>
            <a href={source} className={styles.link}>Source</a>
        </div>
        </div>
    )
  
}
