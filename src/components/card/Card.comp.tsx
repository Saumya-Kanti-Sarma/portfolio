import React from 'react'
import styles from "./SkillCard.module.css";
import Link from 'next/link';

interface skillProps {
  heading: string;
  img: string;
  paragraph: string;
  link: string;
  imgWidth?: number
}
const Card: React.FC<skillProps> = ({ heading, img, paragraph, link }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillTop}>
        <img src={img} alt='skill.img' />
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
      <Link href={link}>Learn More {">"}</Link>
    </div>
  )
}

export default Card
