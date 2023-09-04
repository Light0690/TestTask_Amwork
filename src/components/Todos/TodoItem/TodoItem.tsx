import { useState } from "react";

import { ITodo } from "../../../interfaces/ITodo";

import UITag from "../../UI/UITag/UITag";

import todo_avatar from "../../../assets/todo_avatar.jpg";

import styles from "./TodoItem.module.scss";

const TodoItem = ({ id, title, completed }: ITodo) => {
  const [checked, setChecked] = useState(completed);

  return (
    <div className={styles.wrapper}>
      <div>
        <input
          id={`checkbox${id}`}
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
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
      <div className={styles.wrapper__footer}>
        <div className={styles.wrapper__tags}>
          <UITag sheme="primary" text={"uitag"} />
          <UITag sheme="normal" text={"uitag"} />
        </div>
        <div>
          <img
            className={styles.wrapper__avatar}
            src={todo_avatar}
            alt="avatar"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
