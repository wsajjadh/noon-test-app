import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import BaseComponent from "./components/BaseComponent";

import Footer from "./components/NavComponent";
import SpinnerComponent from "./components/SpinnerComponent";
import CardComponent from "./components/CardComponent";

import store from "./store/store";
import { resolveHref } from "next/dist/shared/lib/router/router";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // seperating function can be usefull in future
  const fetchPosts = () => {
    return new Promise((resolve) => {
      store.fetchPosts().then((res) => {
        resolve(res);
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
            {posts.map((post) => (
              <CardComponent key={post.postId} post={post} />
            ))}
          </BaseComponent>

          <Footer />
        </div>
      )}
    </div>
    // <SpinnerComponent />
  );
}
