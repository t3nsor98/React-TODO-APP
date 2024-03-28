import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoInput from "../components/Todoinput";

function App() {
  const [todos, setTodos] = useState([
    "Wake up early",
    "Drink Water after waking up",
    "Join Computer Networking Classes",
    "Have a fibre rich lunch"
  ])

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex !== index
    })

    setTodos(newTodoList);

  }

  function handleEditTodo(index) {

  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  );
}

export default App;
