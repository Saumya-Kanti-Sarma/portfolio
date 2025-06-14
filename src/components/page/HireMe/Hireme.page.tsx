"use client";
import styles from "./page.module.css"

const Hireme = () => {
  return (
    <div className={styles.hireMe}>
      <h1>Hire Me</h1>
      <p>I'm looking for freelance and internship opportunities in the field of Full-Stack development with MERN stack...</p>
      <div className={styles.btnArea}>
        <button>Download CV</button>
        <button>Contact Now</button>
      </div>
    </div>
  )
}

export default Hireme
