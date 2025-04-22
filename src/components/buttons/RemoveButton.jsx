export default function RemoveButton({ item, setTodos, todos, index }) {
  function removeTodo() {
    console.log("Todos Before: ", todos);
    const updatedTodos = todos.filter((_, i) => i !== index);
    console.log("Removed element id: ", index, "Data: ", item);
    setTodos(updatedTodos);
    console.log("Todos After: ", todos);
  }
  return (
    <button className="btn" onClick={removeTodo}>
      ×
    </button>
  );
}
