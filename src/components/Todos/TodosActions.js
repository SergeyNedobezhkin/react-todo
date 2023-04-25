import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

import Button from "../UI/Button";
function TodosActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <>
      <Button onClick={resetTodos} title="Reset Todos">
        {<RiRefreshLine />}
      </Button>
      <Button title="Clear Completed Todos" onClick={deleteCompletedTodos}>
        {<RiDeleteBin2Line />}
      </Button>
    </>
  );
}
export default TodosActions;
