import Image from "next/image";
import Icon from "../components/IconComponent";
import styles from "../../styles/CardComponent.module.css";

function CardComponent() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image src="/user-one.jpg" width={70} height={70} />
        <h3>Waseem Sajjadh</h3>
      </div>

      <div className={styles.container}>
        <Image src="/cat.jpg" width={300} height={250} layout="responsive" />
        <div className={styles.bottomLeft}>
          <h5>Leaf iPhone Case</h5>
          <h3>AED 230</h3>
        </div>
        <div className={styles.bottomRight}>
          <Icon
            className="icon"
            icon="heart"
            alt="Add to favorite"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
