import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import HeadComponent from "./components/HeadComponent";
import BaseComponent from "./components/BaseComponent";

import Footer from "./components/NavComponent";
import SpinnerComponent from "./components/SpinnerComponent";

import Card from "./components/CardComponent";

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
          <HeadComponent title="Home" content="Home page content" />

          <BaseComponent>
            <Card />
          </BaseComponent>

          <Footer />
        </div>
      )}
    </div>
    // <SpinnerComponent />
  );
}
