import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Icon from "./IconComponent";

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer}>
        <Link href="/">
          <a>
            {" "}
            <Icon icon="home" alt="Home" width={72} height={16} />
          </a>
        </Link>

        <Link href="/favorites">
          <a>
            <Icon icon="heart" alt="Fav" width={72} height={16} />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
