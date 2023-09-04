import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ITodo } from "../../../interfaces/ITodo";

import TodoItem from "../TodoItem";

import styles from "./TodoGroup.module.scss";

interface Props {
  todos: ITodo[];
  setIsVisible: any;
}

const TodoGroup = ({ todos, setIsVisible }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setIsVisible(inView)
  }, [inView]);

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

  return (
    <div ref={ref} className={styles.wrapper}>
      {todosTSX}
      {todos.length ? <div ref={ref}></div> : ""}
    </div>
  );
};

export default TodoGroup;
