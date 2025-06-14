"use client";

import Home from "@/components/page/Home/Home.page";
import Knowledge from "@/components/page/knowledge/knowledge.page";
import { useRef } from "react";
import styles from "./page.module.css"
import Project from "@/components/page/Projects/Project.page";
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
        <h1>certifications</h1>
      </div>
    </>
  )
}

export default page
