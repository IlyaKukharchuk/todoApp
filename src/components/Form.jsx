import { useState } from "react";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ data: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.data != "") {
      setTodos(todos.concat(todo));
      setTodo({ data: "", done: false });
    } else {
      alert("Put some task in an input field!");
    }
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
