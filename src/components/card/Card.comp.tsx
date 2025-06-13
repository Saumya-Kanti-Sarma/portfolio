import React from 'react'
import styles from "./SkillCard.module.css";
import Image from 'next/image';
import Link from 'next/link';

interface skillProps {
  heading: string;
  img: string;
  paragraph: string;
  link: string;
  imgWidth?: number
}
const Card: React.FC<skillProps> = ({ heading, img, paragraph, link, imgWidth = 100 }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillTop}>
        <Image src={img} alt='skill.img' height={imgWidth} width={imgWidth} />
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
      <Link href={link}>Learn More {">"}</Link>
    </div>
  )
}

export default Card
