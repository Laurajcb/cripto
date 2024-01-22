import { Coin } from "@/types";
import styles from "@/styles/itemMarket.module.css"

type ItemMarketProps = {
  coin: Coin;
  index: number;
}

export default function ItemMarket(props: ItemMarketProps) {
  const { coin, index } = props;

  return (
    <tr>
      <td>{index}</td>
      <td className={styles.coin_name_container}>
        <img
          src={coin.image}
          alt="icon"
        />
        {coin.name}
      </td>
      <td className={styles.desktop_col}>
        {`$ ${coin.current_price}`}
      </td>
      <td className={styles.desktop_col}>
        {coin.market_cap}
      </td>
      <td className={`${styles.mobile_col} ${styles.price_market_cap}`}>
        {`$ ${coin.current_price}`}
        <div className={styles.market_cap}>{coin.market_cap}</div>
      </td>
    </tr>

  )
}