import Image from "next/image";
import styles from "@/styles/tableMarket.module.css"
import ItemMarket from "./ItemMarket";
import { Coin } from "@/types";



type TableMarketProps = {
  data: Coin[]
}

export default function TableMarket(props: TableMarketProps) {
  const coins = props.data

  return (
    <article>
      <section className={styles.container}>
        <h2 className={styles.title}>
          Todays Cryptocurrency Prices
        </h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th className={styles.desktop_col}>Price</th>
              <th className={styles.desktop_col}>Market Cap</th>
              <th className={`${styles.mobile_col} ${styles.price_market_cap}`}>Price / Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <ItemMarket coin={coin} index={index + 1} key={coin.id} />
            ))}
          </tbody>
        </table>
      </section>
    </article>


  )
}