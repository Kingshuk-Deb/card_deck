import Head from "next/head";
import Homepage from "./Homepage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <> 
      <Head>
        <title>Ecommerce Product</title>
        <meta name="description" content="Created by Kingshuk Deb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <Homepage />
      </main>
    </>
  );
}
