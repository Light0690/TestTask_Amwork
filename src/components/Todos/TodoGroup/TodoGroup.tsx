import { ITodo } from "../../../interfaces/ITodo";

import TodoItem from "../TodoItem";

import styles from "./TodoGroup.module.scss";

interface Props {
  todos: ITodo[];
}

const TodoGroup = ({ todos }: Props) => {
  const todosTSX = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
      />
    );
  });

  return <div className={styles.wrapper}>{todosTSX}</div>;
};

export default TodoGroup;
