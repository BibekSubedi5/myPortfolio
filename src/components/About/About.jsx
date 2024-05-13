import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./about.module.css";

export const About = () => {
  return (
   <section className={styles.container} id='about'>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img  className={styles.aboutImg} 
    src={getImageUrl("about/about.png")}/>
    <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
        <img  src={getImageUrl("about/checkmark.png")}  alt='checkmark icon'/>
        <div className={styles.aboutItemText}>
          <h3>About Me</h3>
          <p>
          I am a dedicated frontend developer passionate about
           crafting elegant and user-friendly web experiences, leveraging the 
          latest technologies to transform innovative ideas into reality
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img  src={getImageUrl("about/arrow.png")} alt='arrow icon' />
        <div className={styles.aboutItemText}>
    
        <h3>Plus 2 In Science</h3>
        <p>National Education Board</p>
       <h>
        Diamond secondary School(2017-2019)
        
       </h>
        </div>
      </li> 
      <li className={styles.aboutItem}>
        <img  src={getImageUrl("about/study.png")}  alt='study icon'/>
        <div className={styles.aboutItemText}>
        <h3>Bachelor of Software Engineering</h3>
       <p>Pokhara University</p>
       <h6>School of Engineering(2019-present)</h6>
        </div>
      </li>
    </ul>
    </div>
   </section>
  )
}
