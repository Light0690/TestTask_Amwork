import styles from "./UICounter.module.scss";

interface Props {
  num: number;
}

const UICounter = ({ num }: Props) => {
  return <div className={styles.wrapper}>{num}</div>;
};

export default UICounter;
