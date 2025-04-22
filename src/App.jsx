import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const completedTodosAmount = todos.filter(
    (todo) => todo && todo.done === true
  ).length;

  return (
    <div className="App">
      <Header />
      <Todo todos={todos} setTodos={setTodos} />
      <Footer todos={todos} completedTodosAmount={completedTodosAmount} />
    </div>
  );
}
