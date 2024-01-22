import styles from "./page.module.css";
import Banner from "@/components/Banner";
import TableContainer from "@/components/TableMarketCap";

export default function Home() {
  return (
    <main>
      <Banner />
      <TableContainer />
    </main>
  );
}
