import React from 'react'
import { getImageUrl } from '../../utils';
import  styles from "./hero.module.css";

export const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi I am Bibek</h1>
        <p className={styles.description}>I am a Frontend Developer</p>
        <a href="mailto:subedi.bibek164@gmail.com" className={styles.contactBtn}>Contact me</a>

    </div>
    <img
    src="/bibeks.png"
    alt='image of me'
    className={styles.myImg}
   
/>
<div className={styles.topBlur}/>
<div className={styles.bottomBlur}/>


   </section>
  )
}
