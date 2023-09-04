import { useEffect, useState } from "react";

import { getTodosByPage } from "../../api/getTodos";

import { ITodo } from "../../interfaces/ITodo";

import TodosHeader from "../../components/Todos/TodosHeader";
import TodoGroup from "../../components/Todos/TodoGroup";

import styles from "./Todos.module.scss";

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    (async () => {
      if (isVisible && page <= 10) {
        const response = await getTodosByPage(page);
        setPage((prev) => prev + 1);
        setTodos((prev) => [...prev, ...response]);
      }
    })();
  }, [isVisible]);

  return (
    <div className={styles.wrapper}>
      <TodosHeader todosLength={todos.length} />
      <TodoGroup todos={todos} setIsVisible={setIsVisible} />
    </div>
  );
};

export default Todos;
