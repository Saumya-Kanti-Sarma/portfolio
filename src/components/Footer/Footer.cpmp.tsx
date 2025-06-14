import React from 'react'
import styles from "./page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.heading}>Saumya Sarma | saumyasarma@gmail.com</h1>
      <div className={styles.sectionsWrapper}>
        <section className={styles.projectsSection}>
          <h3>Projects</h3>
          <ul>
            <li><a href="https://ommitus.vercel.app" target="_blank" rel="noopener noreferrer">Ommitus</a></li>
            <li><a href="https://news48.vercel.app" target="_blank" rel="noopener noreferrer">News48</a></li>
            <li><a href="https://codeplexx.vercel.app" target="_blank" rel="noopener noreferrer">Codeplexx</a></li>
            <li><a href="https://gamaaudios.vercel.app" target="_blank" rel="noopener noreferrer">Gamaaudios</a></li>
          </ul>
        </section>
        <section className={styles.certificatesSection}>
          <h3>Certificates</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MongoDB Aggregations</li>
          </ul>
        </section>
        <section className={styles.actionsSection}>
          <h3>Quick Actions</h3>
          <div className={styles.actionsBtns}>
            <a href="/resume.pdf" download className={styles.actionBtn}>Download Resume</a>
            <a href="https://wa.me/916009425779" target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>WhatsApp</a>
            <a href="/blogs" className={styles.actionBtn}>Read Blogs</a>
          </div>
        </section>
        <section className={styles.contactSection}>
          <h3>Contact</h3>
          <ul className={styles.contactList}>
            <li>📧 <a href="mailto:work.saumyasarma@gmail.com">saumyasarma@gmail.com</a></li>
            <li>📞 <a href="tel:+916009425779">+91-6009425779</a></li>
            <li>📍 Dharmanagar, North Tripura, India 799250</li>
          </ul>
        </section>
      </div>
      <div className={styles.socials}>
        <a href="https://instagram.com/saumya__sarma" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/insta.svg" alt="Instagram" />
        </a>
        <a href="https://linkedin.com/in/saumya_sarma" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/saumya__sarma" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <img src="/twitter.svg" alt="Twitter" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
