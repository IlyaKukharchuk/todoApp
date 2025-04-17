import Todo from "./components/Todo";
import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(todos.concat(todo));
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <ul>
        <Todo value={todos} />
      </ul>
    </div>
  );
}
