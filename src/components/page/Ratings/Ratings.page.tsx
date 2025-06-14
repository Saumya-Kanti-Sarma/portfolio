"use client";
import RatingCard from "@/components/ratingCard/RatingCard.comp";
import styles from "./page.module.css";
import { RatingsData } from "../../../../data/ratings";
const Ratings = () => {
  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.ratings}>
        <div className={styles.heading}>
          <h1>RATINGS</h1>
          <p>peoplw with whome I have worked</p>
        </div>
        <div className={styles.cardHolder}>
          {RatingsData && RatingsData.map((item, index) => (
            <RatingCard
              stars={item.stars}
              comment={item.comment}
              by={item.by}
              email={item.email}
              studentOf={item.studentOf}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ratings
