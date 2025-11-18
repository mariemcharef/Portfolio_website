import React from 'react'
import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';
import styles from "./ProjectCard.module.css";
export const Projects = () => {
  return (<div id= "projects" >
    
    <h2 className={styles.p} >
        Projects
    </h2> 
    <section className={styles.divContainer} >

        <div className={styles.card}>{
           projects.map((p,id)=>{
           return(
                 <ProjectCard  key={id} p={p}/>
                
           )
           })
           
        }
        </div>
    </section>
    </div>
  )
}

