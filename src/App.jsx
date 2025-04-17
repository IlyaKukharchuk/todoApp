import Todo from "./components/Todo";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(todos.concat(todo));
    setTodo("");
  }
  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <div class="todos">
        {todos.map((item, index) => (
          <Todo data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
