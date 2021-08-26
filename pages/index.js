import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import BaseComponent from "./components/BaseComponent";

import Footer from "./components/NavComponent";
import SpinnerComponent from "./components/SpinnerComponent";
import CardComponent from "./components/CardComponent";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <div className={styles.container}>
          <Head>
            <title>Home</title>
            <meta name="description" content="Test app for noon" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <BaseComponent>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </BaseComponent>

          <Footer />
        </div>
      )}
    </div>
    // <SpinnerComponent />
  );
}
