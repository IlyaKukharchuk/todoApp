export default function RemoveButton({ item, setTodos, todos, index }) {
  function removeTodo() {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }
  return (
    <button className="btn" onClick={removeTodo}>
      ×
    </button>
  );
}
