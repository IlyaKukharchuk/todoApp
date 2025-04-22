export default function Form({ todos, setTodos, todo, setTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.data.trim() != "") {
      setTodos([...todos, todo]);
    } else {
      alert("Put some task in an input field!");
    }
    setTodo({ data: "", done: false });
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={todo.data}
        onChange={(e) => setTodo({ data: e.target.value, done: false })}
        placeholder="Enter todo item..."
      />
      <button type="submit" className="btn">
        +
      </button>
    </form>
  );
}
