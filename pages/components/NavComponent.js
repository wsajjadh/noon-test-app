import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";

import Icon from "./IconComponent";
import styles from "../../styles/Home.module.css";

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer}>
        <Link href="/">
          <a>
            {" "}
            <FontAwesomeIcon icon={faHome} />
          </a>
        </Link>

        <Link href="/favorites">
          <a>
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
