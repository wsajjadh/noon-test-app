import { useEffect, useState } from "react";
import styles from "../styles/Favorites.module.css";
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
  const [noPost, setNoPost] = useState(false);

  const makeFavorite = (id) => {
    store.addToFavorite(id).then(() => {
      setNum(num + 1);
      /* store.fetchFavorites().then(() => {
        setNum(num + 1);
      }); */
    });
  };

  useEffect(() => {
    store
      .fetchFavorites()
      .then((res) => {
        setPosts(res);
      })
      .catch(() => {
        // No favs, reject from promise
        setNoPost(true);
      });

    setTimeout(() => {
      // Hide loading
      setLoading(false);
    }, 2000);
  }, [num]);

  return (
    <div>
      <HeadComponent title="Favorite" content="Favorite page content" />

      {loading ? (
        <SpinnerComponent />
      ) : (
        <div className={styles.container}>
          <BaseComponent>
            {!noPost ? (
              posts.map((post) => (
                <CardComponent
                  key={post.postId}
                  post={post}
                  makeFavorite={makeFavorite}
                />
              ))
            ) : (
              <div className={styles.noPostContainer}>
                <h1>No Favorites</h1>
              </div>
            )}
          </BaseComponent>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
