import React from 'react'

import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';
import styles from "./experience.module.css";


export const Experience = () => {
  return (
    <section className={styles.container} id='skill'>
        <h2 className={styles.title}> Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
               {
                skills.map((skill,id)=>{
                    return <div className={styles.skill} key={id}>
                       <div className={styles.skillImgContainer}>
                       <img    className={styles.skillImg} src={getImageUrl(skill.imageSrc)} 
                        alt={skill.title}/>
                       </div>
                     
                          <p>{skill.title}</p>
                    </div>
                })
               } 
              
            </div>
            <ul className={styles.history}>
         
              <li className={styles.historyItem}>
                
                <h1> Responsive Webpage design</h1>
      </li>
      <li className={styles.historyItem}>
                
                <h1>Project Management</h1>
      </li>
      <li className={styles.historyItem}>
                
                <h1> Project Deployment</h1>
      </li>
        
        </ul>
          
        </div>

    </section>
  )
}
