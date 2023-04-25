import Todo from "./Todo";
import styles from "./TodoList.module.css";
function TodoList(props) {
  const { todos, deleteTodo, toggleTodo } = props;
  return (
    <div className={styles.totoListContainer}>
      {todos.length === 0 && <h2>Todo list is empty!</h2>}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
