import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import HeadComponent from "./components/HeadComponent";
import BaseComponent from "./components/BaseComponent";

import Footer from "./components/NavComponent";
import SpinnerComponent from "./components/SpinnerComponent";
import CardComponent from "./components/CardComponent";

import store from "./store/store";

const FavoritePage = () => {
  // loading state
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(0);
  const [posts, setPosts] = useState([]);

  const makeFavorite = (id) => {
    store.addToFavorite(id).then(() => {
      store.fetchFavorites().then((res) => {
        setNum(num + 1);
        setPosts(res);
      });
    });
  };

  useEffect(() => {
    store.fetchFavorites().then((res) => {
      setPosts(res);
    });

    setTimeout(() => {
      // Hide loading
      setLoading(false);
    }, 2000);
  }, [num]);

  return (
    <div>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <div className={styles.container}>
          <HeadComponent title="Favorite" content="Favorite page content" />

          <BaseComponent>
            {posts.map((post) => (
              <CardComponent
                key={post.postId}
                post={post}
                makeFavorite={makeFavorite}
              />
            ))}
          </BaseComponent>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
