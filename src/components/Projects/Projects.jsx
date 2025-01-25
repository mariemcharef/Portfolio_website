import React from 'react'
import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';
export const Projects = () => {
  return (
    <section>
        <h2>
            Projects
        </h2> 
        <div>{
           projects.map((p,id)=>{
           return(
            <ProjectCard key={id} p={p}/>
           )
           })
           
        }
        </div>
    </section>
  )
}

