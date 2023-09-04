import { useEffect, useState } from "react";

import { getTodosByPage } from "../../api/getTodos";

import { ITodo } from "../../interfaces/ITodo";

import TodosHeader from "../../components/Todos/TodosHeader";
import TodoGroup from "../../components/Todos/TodoGroup";

import styles from "./Todos.module.scss";

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodosByPage(1).then((res) => setTodos(res));
  }, []);

  return (
    <div className={styles.wrapper}>
      <TodosHeader todosLength={todos.length}/>
      <TodoGroup todos={todos} />
    </div>
  );
};

export default Todo;
