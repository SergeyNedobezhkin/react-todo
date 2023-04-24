import Todo from "./Todo";
import styles from "./TodoList.module.css";
function TodoList(props) {
  const { todos, deleteTodo } = props;
  return (
    <div className={styles.totoListContainer}>
      {todos.length === 0 && <h2>Todo list is empty!</h2>}
      {todos.map((todo, index) => {
        return (
          <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
        );
      })}
    </div>
  );
}
export default TodoList;