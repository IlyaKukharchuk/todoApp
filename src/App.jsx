import Todo from "./components/Todo";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (todo != "") {
      setTodos(todos.concat(todo));
      setTodo("");
    } else {
      alert("Put some task in iput field!");
    }
  }
  return (
    <div className="App">
      <Header />
      <div className="todos">
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
        {todos.map((item, index) => (
          <Todo data={item} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
