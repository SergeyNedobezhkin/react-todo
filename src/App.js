import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const resetTodosHandler = () => {
    setTodos([]);
  };
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <>
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodoHandler} />
        {todos.length ? (
          <TodosActions
            resetTodos={resetTodosHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
            completedTodosExist={!!completedTodosCount}
          />
        ) : (
          ""
        )}
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
        {completedTodosCount > 0 && (
          <h2>{`You hav completed ${completedTodosCount} ${
            completedTodosCount > 1 ? "todos!" : "todo!"
          }`}</h2>
        )}
      </>
    </div>
  );
}

export default App;
