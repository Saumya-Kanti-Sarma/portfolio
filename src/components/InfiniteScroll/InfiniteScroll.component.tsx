"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
const InfiniteScroll = () => {
  const imgList = [
    {
      img: "/blogs/1.jpeg",
      link: "https://codeplexx.vercel.app/user/blogs/b380afa2-ae28-4cdb-a3ba-b5876fa1aece"
    },
    {
      img: "/blogs/2.jpeg",
      link: "https://codeplexx.vercel.app/user/blogs/e655b315-be31-4381-ac97-a065018772c7"
    },
    {
      img: "/blogs/4.jpeg",
      link: "#"
    },
    {
      img: "/blogs/3.jpeg",
      link: "https://codeplexx.vercel.app/user/blogs/fad2eccb-ff1f-4410-920a-793dee28769a"
    },
    {
      img: "/blogs/5.jpeg",
      link: "#"
    },
    {
      img: "/blogs/7.jpeg",
      link: "#"
    },
  ];
  const infiniteImg = [...imgList, ...imgList, ...imgList, ...imgList];
  return (
    <div className={styles.parent}>
      <div className={styles.imgHolder}>
        {infiniteImg.map((item, index) => (
          <Link href={item.link} target="blank">
            <Image src={item.img} alt={"img"} key={index} width={320} height={180} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default InfiniteScroll
