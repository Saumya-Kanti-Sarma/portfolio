"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

interface cardProps {
  heading?: string,
  img?: string,
  about1?: string,
  about2?: string,
  link?: string,
}
const Card: React.FC<cardProps> = ({
  heading = "Are you a Human?",
  img = "/icons/recruter.svg",
  about1 = "Hey Recruiter, I’ve specially made this section for your ease. You’ll find all necessary information about me here..",
  about2 = " Hi, my name is Saumya Sarma. I have in depth knowledge of JavaScript and it’s frameworks like Next.js, Node.js and Next.js      To know more about me you can just click the button below...",
  link = "/"
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h1 className={styles.heading}>{heading}</h1>
        <hr />
        <div className={styles.profile}>
          <Image src={img} alt="img" width={100} height={100} />
          <p>{about1}</p>
        </div>
        <p className={styles.about2}>
          {about2}
        </p>
      </div>
      <Link href={link} className={styles.btn}>Visit Now</Link>

    </div>
  )
};

export default Card