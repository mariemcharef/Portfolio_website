import React from 'react'
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((s,id)=>{
                        return (<div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img className={styles.logo} src={s.imageSrc} alt={s.title}/></div>
                            <p>{s.title}</p>
                        </div>)
                    })
                }
            </div>
            
            <ul className={styles.history}>
            {history.map((historyItem, id) => {
                return (
                <li key={id}  className={styles.historyItem} >
                    <img
                    className={styles.imgex}
                    src={historyItem.imageSrc}
                    alt={`${historyItem.imageSrc}`}
                    />
                    <div className={styles.historyItemDetails}>
                        <h2>{historyItem.nature} :</h2>
                        <h3>{`${historyItem.title}, ${historyItem.organisation}`}</h3>
                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                        {historyItem.description.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                        })}
                    </ul>
                    </div>
                </li>
                )
            })}
            </ul>


        </div>
    </section>
   
  )
}

