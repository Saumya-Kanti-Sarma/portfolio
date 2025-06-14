"use client";
import styles from "./page.module.css";
import CertificateData from "../../../../data/certificate";
import Card from "@/components/card/Card.comp";
const Certificates = () => {
  return (
    <div className={styles.main}>
      <div className={styles.projectContainer}>
        <div className={styles.heading}>
          <h1>MY CERTIFICATIONS</h1>
          <p>to showcase my learning & passion</p>
        </div>
        <div className={styles.cardHolder}>
          {CertificateData && CertificateData.map((item, index) => (
            <Card
              key={index}
              heading={""}
              img={item.image}
              paragraph={`${item.title} by: ${item.provider}`}
              link={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates
