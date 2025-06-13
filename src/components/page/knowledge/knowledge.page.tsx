"use client";
import Card from "@/components/card/Card.comp";
import styles from "./page.module.css";
import { cardData } from "../../../../data/cardData";
const Knowledge = () => {
  return (
    <div className={styles.main}>
      <div className={styles.skillContainer}>
        <div className={styles.heading}>
          <h1>KEY SKILLS</h1>
          <p>reason why should you hire me?</p>
        </div>
        <div className={styles.cardHolder}>
          {cardData && cardData.map((item, index) => (
            <Card
              key={index}
              heading={item.heading}
              paragraph={item.paragraph}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
        <br />
      </div>
    </div>
  )
}

export default Knowledge
