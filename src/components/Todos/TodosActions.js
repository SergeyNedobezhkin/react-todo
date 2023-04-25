import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.module.css";

import Button from "../UI/Button";
function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodos} title="Reset Todos">
        {<RiRefreshLine />}
      </Button>
      {
        <Button
          title="Clear Completed Todos"
          onClick={deleteCompletedTodos}
          disabled={!completedTodosExist}
        >
          {<RiDeleteBin2Line />}
        </Button>
      }
    </div>
  );
}
export default TodosActions;
