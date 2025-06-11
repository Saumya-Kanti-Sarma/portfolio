"use client";

import CustomTxt from "@/components/customTxt/CustomTxt.component";
import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card/Card.component";
import { useState } from "react";

export default function Home() {
  const [scrollPersent, setScrollPersent] = useState(0);
  return (
    <>
      <main className={styles.main}>
        <CustomTxt>
          <h1>Hi this is </h1>
          <Image src={"/img/saumya.png"} alt="saumya img" height={50} width={50} />
          <h1>Saumya Sarma </h1>
        </CustomTxt>
        <CustomTxt>
          <p>A full-stack developer with deep knowledge of REACT </p>
          <Image src={"/icons/react.svg"} alt="react" height={50} width={50} />
          <p>, Node.js </p>
          <Image src={"/icons/nodejs.svg"} alt="nodejs" height={50} width={50} />
          <p>and MongoDb </p>
          <Image src={"/icons/mongodb.svg"} alt="mongodb" height={50} width={50} />
        </CustomTxt>
        <br />
        <div className={styles.cardContainer}>
          <div className={styles.cardHolder}>
            <Card
              heading="Are you a Recruiter?"
              img="/icons/recruter.svg"
              about1="Hey Recruiter, I’ve specially made this section for your ease. You’ll find all necessary information about me here.."
              about2="Hi, my name is Saumya Sarma. I have in depth knowledge of JavaScript and it’s frameworks like Next.js, Node.js and Next.js
            To know more about me you can just click the button below..."
              link="/recruiter"
            />
          </div>
          <div className={styles.cardHolder}>
            <Card
              heading="Are you a Developer?"
              img="/icons/developer.svg"
              about1="Hey Developer, I’ve specially made this section for your ease. You’ll find all necessary information about me here.."
              about2="Hi, my name is Saumya Sarma. I’ve mentioned all my open sourced projects with it’s link in this section. Feel free to check and contribute
To know more about me you can just click the button below..."
              link="/developer"
            /></div>
          <div className={styles.cardHolder}>
            <Card
              heading="Are you a Visitor?"
              img="/icons/visitor.svg"
              about1="Hey Visitor, I’ve specially made this section for your ease. You’ll find all necessary information about me here.."
              about2="Hi, my name is Saumya Sarma. I’ve some special things for you here. You’ll find my social handles, contributions and future events here..
To know more about me you can just click the button below..."
              link="/visitor"
            /></div>
        </div>
        <div className={styles.smallCardContainer} onScroll={e => {
          const scrollLeft = e.currentTarget.scrollLeft;
          const scrollWidth = e.currentTarget.scrollWidth;
          const clientWidth = e.currentTarget.clientWidth;
          // Example: percent scrolled
          const percentScrolled = (scrollLeft / (scrollWidth - clientWidth)) * 100;
          // console.log(percentScrolled);

          if (percentScrolled <= 0) {
            setScrollPersent(0);
          }
          if (percentScrolled > 10 && percentScrolled <= 50) {
            setScrollPersent(1);
          }
          if (percentScrolled > 60 && percentScrolled <= 100) {
            setScrollPersent(2);
          }
        }}>
          <div className={styles.cardRow} >
            <div className={styles.smallCardHolder}>
              <Card
                heading="Are you a Recruiter?"
                img="/icons/recruter.svg"
                about1="Hey Recruiter, I’ve specially made this section for your ease. You’ll find all necessary information about me here.."
                about2="Hi, my name is Saumya Sarma. I have in depth knowledge of JavaScript and it’s frameworks like Next.js, Node.js and Next.js
            To know more about me you can just click the button below..."
                link="/recruiter"
              />
            </div>
            <div className={styles.smallCardHolder}>
              <Card
                heading="Are you a Developer?"
                img="/icons/developer.svg"
                about1="Hey Developer, I’ve specially made this section for your ease. You’ll find all necessary information about me here.."
                about2="Hi, my name is Saumya Sarma. I’ve mentioned all my open sourced projects with it’s link in this section. Feel free to check and contribute
To know more about me you can just click the button below..."
                link="/developer"
              /></div>
            <div className={styles.smallCardHolder}>
              <Card
                heading="Are you a Visitor?"
                img="/icons/visitor.svg"
                about1="Hey Visitor, I’ve specially made this section for your ease. You’ll find all necessary information about me here.."
                about2="Hi, my name is Saumya Sarma. I’ve some special things for you here. You’ll find my social handles, contributions and future events here..
To know more about me you can just click the button below..."
                link="/visitor"
              /></div>
          </div>
        </div>
        <div className={styles.dots}>
          {['•', '•', '•'].map((item, i) => (
            <button
              key={i}
              className={`${styles.dotButton} ${i == scrollPersent ? styles.activeDot : ''}`}
            >
              <h1>{item}</h1>
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
