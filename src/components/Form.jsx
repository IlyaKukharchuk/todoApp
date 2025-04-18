import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (todo != "") {
      setTodos(todos.concat(todo));
      setTodo("");
    } else {
      alert("Put some task in an input field!");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="btn">
        +
      </button>
    </form>
  );
}
