import { ITodo } from "../../../interfaces/ITodo";

import styles from "./TodoItem.module.scss";

const TodoItem = ({ id, title, completed }: ITodo) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <input
          id={`checkbox${id}`}
          type="checkbox"
          className={styles.wrapper__checkbox}
        />
        <label htmlFor={`checkbox${id}`} className={styles.wrapper__title}>
          {title}
        </label>
      </div>
      <div className={styles.wrapper__dates}>
        <div>date</div>
        <div>date</div>
      </div>
      <div>
        <p>task task task</p>
      </div>
    </div>
  );
};

export default TodoItem;
