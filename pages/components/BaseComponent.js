import styles from "../../styles/Home.module.css";

const BaseComponent = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default BaseComponent;
