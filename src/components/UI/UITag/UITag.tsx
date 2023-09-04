import cn from "classnames";

import styles from "./UITag.module.scss";

interface Props {
  sheme: "primary" | "normal";
  text:string;
}

const UITag = ({ sheme,text }: Props) => {
  return (
    <div
      className={cn(
        styles.wrapper,
        sheme === "primary" ? styles.wrapper__primary : styles.wrapper__normal
      )}
    >
      <p>{text}</p>
    </div>
  );
};

export default UITag;
