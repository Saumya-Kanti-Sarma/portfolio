"use client";
import Link from "next/link";
import styles from "./page.module.css"
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href={"/"} className={styles.logoLink}>
        <h1 className={styles.logo}>Saumya.dev</h1>
      </Link>
      <ul className={styles.navUl}>
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
      </ul>
    </nav>
  )
}
export default Navbar;