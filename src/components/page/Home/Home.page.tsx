"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import React from "react";
interface homePorps {
  onClick: () => void
}
const Home: React.FC<homePorps> = ({ onClick }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainWrapper}>
          <Image src={"/pfp.jpg"} alt="pfp.img" width={200} height={200} />
          <div>
            <h1>Hi, I'm Saumya Sarma</h1>
            <p>
              <i>
                "a passionate Full-Stack developer dedicated to create innovative solutions. Explore my portfolio to see my projects, certifications, and skills that can elevate your business.."
              </i>
            </p>
          </div>
          <div className={styles.btnWrapper}>
            <button onClick={onClick} >Know more {'>'} </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
