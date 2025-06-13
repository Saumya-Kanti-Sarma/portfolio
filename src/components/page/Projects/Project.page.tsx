"use client";
import styles from "./page.module.css";
import ProjectsData from "../../../../data/projects";
import Card from "@/components/card/Card.comp";
const Project = () => {
  return (
    <div className={styles.main}>
      <div className={styles.projectContainer}>
        <div className={styles.heading}>
          <h1>MY PROJECTS</h1>
          <p>to showcase my skills</p>
        </div>
        <div className={styles.cardHolder}>
          {ProjectsData && ProjectsData.map((item, index) => (
            <Card
              key={index}
              heading={item.title}
              img={item.image}
              paragraph={item.description}
              link={item.deployed_url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
