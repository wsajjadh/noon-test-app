import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Nav.module.css";

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer}>
        <Link href="/">
          <a>
            <p className={styles.navLabelText}>Home</p>
            <FontAwesomeIcon className={styles.navIcon} icon={faHome} />
          </a>
        </Link>

        <Link href="/favorites">
          <a>
            <p className={styles.navLabelText}>Liked</p>
            <FontAwesomeIcon className={styles.navIcon} icon={faHeart} />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
