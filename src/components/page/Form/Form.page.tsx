"use client";
import styles from "./page.module.css";

const Form = () => {
  return (
    <div className={styles.formWrapper}>
      <aside className={styles.aside}>
        <h1>Get In Touch</h1>
        <p>I'd love to work for you!</p>
        <p><img src="/msg.svg" alt="alt.img" />work.saumyasarma@gmail.com</p>
        <p><img src="/call.svg" alt="alt.img" /> +91-6009425779</p>
        <p><img src="/location.svg" alt="alt.img" /> Dharmanagar North Tripura India 799250 </p>
      </aside>
      <section className={styles.section}>
        <form action="" className={styles.form}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name here" name="name" />
          <label htmlFor="">Your email</label>
          <input type="email" placeholder="Enter your email here" name="email" />
          <label htmlFor="">Your Message</label>
          <textarea placeholder="Enter your message here" name="message" />
          <button>send email</button>
        </form>
      </section>
    </div>
  )
}

export default Form
