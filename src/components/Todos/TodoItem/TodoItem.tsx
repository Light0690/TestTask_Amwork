import { useState } from "react";
import { faker } from "@faker-js/faker";

import { getFormatDate } from "../../../helpers/Date";

import { ITodo } from "../../../interfaces/ITodo";

import UITag from "../../UI/UITag/UITag";

import todo_avatar from "../../../assets/todo_avatar.jpg";

import styles from "./TodoItem.module.scss";

const TodoItem = ({ id, title, completed }: ITodo) => {
  const [checked, setChecked] = useState(completed);

  const startDate = faker.date.anytime();
  const endDate = faker.date.future({ refDate: startDate });

  const startDateTSX = getFormatDate(startDate);
  const endDateTSX = getFormatDate(endDate);
  const taskTSX = faker.lorem.sentence();
  const UiText1 = faker.lorem.word()
  const UiText2 = faker.lorem.word()

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
        <div>{startDateTSX}</div>
        <div>{endDateTSX}</div>
      </div>
      <div>
        <p>{taskTSX}</p>
      </div>
      <div className={styles.wrapper__footer}>
        <div className={styles.wrapper__tags}>
          <UITag sheme="primary" text={UiText1} />
          <UITag sheme="normal" text={UiText2} />
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
