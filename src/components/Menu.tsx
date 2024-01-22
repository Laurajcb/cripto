import Image from "next/image";
import styles from "@/styles/menu.module.css"


export default function Menu() {
  return (
    <nav className={styles.container}>
      <section className={styles.logo_container}>
        <Image
          className={styles.logo}
          src={"/assets/img/logo.png"}
          alt="Logo"
          width={16}
          height={18}
        />
        <h3>CoinPod</h3>
      </section>

      <section className={styles.container_menu_hamburger}>
        <Image
          className={styles.menu_hamburger}
          src={"/assets/img/menuHamburger.png"}
          alt="menuHamburger"
          width={16}
          height={18}
        />
      </section>
      <section className={styles.menu_desktop}>
        <ul className={styles.list_menu}>
          <li>Home</li>
          <li>Blog</li>
        </ul>
        <button className={styles.btn}>
          Trade Now
        </button>
      </section>
    </nav>
  )
}