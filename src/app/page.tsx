"use client";
import styles from "./page.module.css";
import Card from "@/components/card/Card.component";
import { useState } from "react";
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll.component";

export default function Home() {
  const [scrollPersent, setScrollPersent] = useState(0);
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heading}>Hi this is Saumya Sarma,</h1>
        <p className={styles.subHeading}>A Full-stack developer with deep knowledge of React, Nodejs and MongoDB</p>
        <br />
        <hr />
        <br />
        <h1 className={styles.routingHeading}> Route Accordingly:</h1>
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

        <br />
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
