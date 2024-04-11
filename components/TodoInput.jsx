export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        type="text"
        value={todoValue}
        placeholder="Enter your todo..."
        onChange={(event) => {
          setTodoValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add Todo
      </button>
    </header>
  );
}
