"use client";

import Home from "@/components/page/Home/Home.page";
import Knowledge from "@/components/page/knowledge/knowledge.page";
import { useRef } from "react";
import styles from "./page.module.css"
import Project from "@/components/page/Projects/Project.page";
import Certificates from "@/components/page/Certificates/Certificates.page";
import Ratings from "@/components/page/Ratings/Ratings.page";
import Hireme from "@/components/page/HireMe/Hireme.page";
import Form from "@/components/page/Form/Form.page";
import Footer from "@/components/Footer/Footer.cpmp";
const page = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  function handleClick() {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <main className={styles.main} >
        <Home onClick={handleClick} />
      </main>
      <div className={styles.main} ref={nextSectionRef}>
        <Knowledge />
      </div>
      <div className={styles.main} >
        <Project />
      </div>
      <div className={styles.main} >
        <Certificates />
      </div>
      <div className={styles.mainRatings} >
        <Ratings />
      </div>
      <div className={styles.hiremain} >
        <div>
          <Hireme />
        </div>
      </div>
      <div className={styles.main} >
        <Form />
      </div>
      <Footer />
    </>
  )
}

export default page
