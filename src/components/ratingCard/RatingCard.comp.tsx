"use client";
import React from "react";
import styles from "./page.module.css";
interface ratingsProps {
  stars: number,
  comment: string,
  by: string,
  studentOf: string,
  email: string,
}
const RatingCard: React.FC<ratingsProps> = ({ stars, comment, by, studentOf, email }) => {
  return (
    <div className={styles.RatingCard}>
      <section className={styles.stars}>{"★".repeat(stars)}</section>
      <section className={styles.comment}>
        <i>"{comment}"</i>
      </section>
      <section className={styles.profile}>
        <img src="/pfp.svg" alt="pfp.img" className={styles.pfpImg} />
        <section className={styles.pfpTexts}>
          <h3>{by}</h3>
          <p><img src="/location.svg" alt="alt.img" />{studentOf}</p>
          <p> <img src="/msg.svg" alt="alt.img" />{email}</p>
        </section>
      </section>
    </div>
  )
}

export default RatingCard
