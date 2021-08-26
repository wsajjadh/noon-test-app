import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as rHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import store from "../store/store";

import styles from "../../styles/CardComponent.module.css";

const CardComponent = ({ post, makeFavorite }) => {
  const [fav, setFav] = useState(false);

  /* const makeFavorite = (id) => {
    setFav(!fav);
    store.addToFavorite(id);
  }; */

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image
          className={styles.userImg}
          src={post.profileUrl}
          width={70}
          height={70}
        />
        <h3>{post.userName}</h3>
      </div>
      {/* Card Body */}
      <div>
        <div className={styles.container}>
          <img src={post.postImageUrl} alt="Snow" />
          <div className={styles.bottomLeft}>
            <div className={styles.shortDetails}>
              <h5>{post.postTitle}</h5>
              <h3>AED {post.price}</h3>
            </div>
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.favSection}>
              <button
                onClick={() => {
                  makeFavorite(post.postId);
                }}
              >
                <FontAwesomeIcon
                  icon={post.favorite ? faHeart : rHeart}
                  className={styles.icon}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card Footer */}
      <div className={styles.footer}>
        <div className={styles.likesContainer}>
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          <p>{post.totalLikes} Likes</p>
        </div>
        <div>
          <p>{post.postDescription}</p>
          <div className={styles.tags}>
            {post.tags.map((tag, index) => (
              <a href="#" key={index}>
                #{tag}
              </a>
            ))}
          </div>
          <p className={styles.viewComment}>
            View {post.totalComments} comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
