import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import HeadComponent from "./components/HeadComponent";
import BaseComponent from "./components/BaseComponent";

import Footer from "./components/NavComponent";
import SpinnerComponent from "./components/SpinnerComponent";
import CardComponent from "./components/CardComponent";

import store from "./store/store";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(0);
  const [posts, setPosts] = useState([]);

  // seperating function can be usefull in future
  const fetchPosts = () => {
    return new Promise((resolve) => {
      store.fetchPosts().then((res) => {
        resolve(res);
      });
    });
  };

  // Pass this function from here to fetch post again to imitate like reacting to state changes
  const makeFavorite = (id) => {
    store.addToFavorite(id).then(() => {
      fetchPosts().then((res) => {
        setNum(num + 1);
        setPosts(res);
      });
    });
  };

  useEffect(() => {
    // to show loader
    // This is not need (setTimeout) if we use real api
    setTimeout(() => {
      fetchPosts().then((res) => {
        setPosts(res);
      });
      // Loading will be hide whether success or fails
      setLoading(false);
    }, 2000);
  }, [num]); // re render when value changes

  return (
    <div>
      <HeadComponent title="Home" content="Home page content" />

      {loading ? (
        <SpinnerComponent />
      ) : (
        <div className={styles.container}>
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
    // <SpinnerComponent />
  );
}
