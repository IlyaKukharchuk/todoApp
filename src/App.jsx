import Todo from "./components/Todo";
import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
