import { useEffect, useState } from "react";

import { getTodosByPage } from "../../api/getTodos";

import { ITodo } from "../../interfaces/ITodo";

import TodoGroup from "../../components/Todos/TodoGroup";
import styles from "./Todos.module.scss";

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodosByPage(1).then((res) => setTodos(res));
  }, []);

  return (
    <div className={styles.wrapper}>
      <TodoGroup todos={todos} />
    </div>
  );
};

export default Todo;
