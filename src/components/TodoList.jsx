import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {
  return (
    <>
      {todos.map((item, index) => (
        <TodoItem item={item} index={index} setTodos={setTodos} todos={todos} />
      ))}
    </>
  );
}
