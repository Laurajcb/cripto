"use client"
import TableMarket from "@/components/TableMarketCap/TableMarket"
import { Coin } from "@/types";
import { useEffect, useState } from "react";

const API_KEY = "CG-Hq7Dn3gsRwznZbefy75WiYGM"
const URL_API = "https://api.coingecko.com/api/v3/coins/markets"

const apiURL = new URL(URL_API)
apiURL.searchParams.append("x_cg_demo_api_key", API_KEY)
apiURL.searchParams.append("vs_currency", "usd")
apiURL.searchParams.append("per_page", "50")


export default function TableContainer() {
  const [data, setData] = useState<Coin[]>([])

  const getTestCoin = (): Coin => {
    const randomPrice = Number.parseFloat((Math.random() * 9 + 100).toFixed(3))
    const ramdomMarketCup = Number.parseFloat((Math.random() * 90 + 10000).toFixed(3))
    return {
      id: "criptomoon",
      symbol: "ctm",
      name: "Criptomoon",
      image: "https://assets.coingecko.com/coins/images/30980/large/token-logo.png?1696529819",
      current_price: randomPrice,
      market_cap: ramdomMarketCup,
    }
  }

  const getCoins = async () => {
    const data: Coin[] = await fetch(apiURL).then(res => res.json())
    const test_coin = getTestCoin()
    setData([test_coin, ...data])
    console.log(data)
  }

  useEffect(() => {
    getCoins()
    const intervalId = setInterval(() => {
      getCoins()
    }, 20000)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <TableMarket data={data} />
  )
}