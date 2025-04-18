export default function RemoveButton({ item, setTodos, todos, index }) {
  function removeTodo() {
    console.log("Before: ", todos);
    console.log("Clicked index: ", index);
    const updatedTodos = todos.filter((_, index) => index !== index);
    setTodos(updatedTodos);

    console.log("After: ", updatedTodos);
  }
  return (
    <button className="btn" onClick={removeTodo}>
      ×
    </button>
  );
}
