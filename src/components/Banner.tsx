import Image from "next/image";
import styles from "@/styles/banner.module.css"


export default function Banner() {
  return (
    <article className={styles.container}>
      <section className={styles.txt_side_container}>
        <h1 className={styles.title}>
          Make better businees with Cryptocurrency
        </h1>
        <p className={styles.paragraph}>
          We offers users a fully operational long-term rental platform. It plans to leverages
          blockchain technology.
        </p>
        <button className={styles.btn_banner}>Get Whitelisted</button>
      </section>
      <section className={styles.img_side_container}>
        <Image
          alt="illustration"
          src={"/assets/img/illustration.png"}
          width={400}
          height={30}
          className={styles.illustration}
        />
      </section>
    </article>
  )
}