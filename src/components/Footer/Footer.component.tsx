import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <aside className={styles.aside}>
        <h1>Links</h1>
        <ul>
          <li><Link href={"/"} target="blank">Instagram</Link></li>
          <li><Link href={"/"} target="blank">Youtube</Link></li>
          <li><Link href={"/"} target="blank">Twitter</Link></li>
          <li><Link href={"/"} target="blank">Git hub</Link></li>
          <li><Link href={"/"} target="blank">Download Resume</Link></li>
          <li><Link href={"/"} target="blank">Download Certifications</Link></li>
        </ul>
      </aside>
      <main className={styles.main}>
        <div className={styles.main1}>
          <h1>Saumya Sarma | work.saumyasarma@gmail.com</h1>
          <p>Hello, thanks for visiting my portfolio website. You can check the source code of it in my github account. It’s free and open source made with typeScript. I’ve made more then 10 projects highlighting my skills in MERN stack development. Additionally, I’ve upscale by learning additional tech stacks like Supabase, cloudFlare and React Native.</p>

          <p> I’m open to work as a tech writer, Frontend Intern, Backend Intern and Database Management intern. For any queries you can sent me mail in the above mentioned ID. You can download my resume by clicking here.</p>

          <p>Have a wonderful day...</p>
        </div>
        <div className={styles.end}>
          <ul className={styles.footerUL}>
            <Link href={"https://www.instagram.com/developer_saumya/"} target="blank">
              <Image src={"/icons/monochrome/insta.svg"} alt="insta" width={50} height={50} className={styles.mainImg} />
              <Image src={"/icons/insta.svg"} alt="insta" width={50} height={50} />
            </Link>
            <Link href={"https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/"} target="blank">
              <Image src={"/icons/monochrome/linkedin.svg"} alt="linkedin" width={50} height={50} className={styles.mainImg} />
              <Image src={"/icons/linkedin.svg"} alt="insta" width={50} height={50} />
            </Link>
            <Link href={"https://x.com/devloper_saumya"} target="blank">
              <Image src={"/icons/monochrome/twitter.svg"} alt="twitter" width={50} height={50} className={styles.mainImg} />
              <Image src={"/icons/tweeter.svg"} alt="insta" width={50} height={50} />
            </Link>
            <Link href={"#"} target="blank">
              <Image src={"/icons/monochrome/youtube.svg"} alt="youtube" width={50} height={50} className={styles.mainImg} />
              <Image src={"/icons/youtube.svg"} alt="youtube" width={50} height={50} />
            </Link>
          </ul>
          <Link href={"https://codeplexx.vercel.app/user/home"} target="blank" className={styles.blogBtn}>Read My Blogs</Link>
        </div>
      </main>
    </footer>
  )
}

export default Footer;