import RemoveButton from "./buttons/RemoveButton";

export default function TodoItem({ item, todos, setTodos, index }) {
  function handleItemClick() {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div className={item.done ? "todo_item completed" : "todo_item"}>
      <div className="item_data" onClick={handleItemClick}>
        <p>{item.data}</p>
      </div>
      <div className="item-data">
        <RemoveButton
          item={item}
          setTodos={setTodos}
          todos={todos}
          index={index}
        />
      </div>
    </div>
  );
}
