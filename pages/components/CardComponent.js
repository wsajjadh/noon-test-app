import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as rHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/CardComponent.module.css";

const CardComponent = () => {
  const [fav, setFav] = useState(false);

  const makeFavorite = () => {
    setFav(!fav);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image
          className={styles.userImg}
          src="/user-one.jpg"
          width={70}
          height={70}
        />
        <h3>Waseem Sajjadh</h3>
      </div>
      {/* Card Body */}
      <div>
        <div className={styles.container}>
          <img src="/cat.jpg" alt="Snow" />
          <div className={styles.bottomLeft}>
            <div className={styles.shortDetails}>
              <h5>Good cat</h5>
              <h3>AED 230</h3>
            </div>
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.favSection}>
              <button onClick={makeFavorite}>
                <FontAwesomeIcon
                  icon={fav ? faHeart : rHeart}
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
          <p>32 Likes</p>
        </div>
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          <div className={styles.tags}>
            <a href="#">#as</a>
            <a href="#">#as</a>
            <a href="#">#as</a>
          </div>
          <p className={styles.viewComment}>View 12 comments</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
