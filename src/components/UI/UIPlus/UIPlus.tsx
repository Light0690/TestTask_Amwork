import { BsPlus } from "react-icons/bs";

import styles from "./UIPlus.module.scss";

const UIPlus = () => {
  return (
    <button className={styles.wrapper}>
      <BsPlus className={styles.wrapper__svg} />
    </button>
  );
};

export default UIPlus;
