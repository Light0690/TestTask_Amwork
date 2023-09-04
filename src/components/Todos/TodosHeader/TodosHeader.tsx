import UICounter from "@ui/UICounter";
import UIPlus from "@ui/UIPlus";

import styles from "./TodosHeader.module.scss";

interface Props {
  todosLength: number;
}

const TodosHeader = ({ todosLength }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__title}>Today</div>
      <div className={styles.wrapper__buttons}>
        <UIPlus />
        <UICounter num={todosLength} />
      </div>
    </div>
  );
};

export default TodosHeader;
