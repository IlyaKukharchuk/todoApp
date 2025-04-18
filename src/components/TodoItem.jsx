import RemoveButton from "./buttons/RemoveButton";

export default function TodoItem({ item, todos, setTodos, index }) {
  return (
    <div className="todo_item">
      <div className="item_data">
        <p>{item}</p>
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
