import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import HeadComponent from "./components/HeadComponent";
import BaseComponent from "./components/BaseComponent";

import Footer from "./components/NavComponent";
import SpinnerComponent from "./components/SpinnerComponent";

const FavoritePage = () => {
  // loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // Hide loading
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <div className={styles.container}>
          <HeadComponent title="Favorite" content="Favorite page content" />

          <BaseComponent>
            <h1>Favorite screen</h1>
          </BaseComponent>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
