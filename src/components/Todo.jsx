import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo({ todos, setTodos }) {
  const [todo, setTodo] = useState({ data: "", done: false });
  return (
    <div className="todos">
      <Form todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
      <br />
      <br />
    </div>
  );
}
