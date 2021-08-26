import Image from "next/image";
import styles from "../../styles/SpinnerComponent.module.css";

const SpinnerComponent = () => {
  return (
    <div className={styles.container}>
      <Image src="/spinner.svg" width={70} height={70} />
    </div>
  );
};

export default SpinnerComponent;
