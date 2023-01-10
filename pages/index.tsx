import Head from "next/head";
import CardDeck from "../modules/CardDeck";
import styles from "../styles/Card.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce Product</title>
        <meta name="description" content="Created by Kingshuk Deb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <CardDeck />
      </main>
    </>
  );
}
