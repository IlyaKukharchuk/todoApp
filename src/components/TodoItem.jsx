import RemoveButton from "./buttons/RemoveButton";
import { useState } from "react";

export default function TodoItem({ item, todos, setTodos, index }) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleItemClick() {
    if (isCompleted) {
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
    }
  }

  return (
    <div className="todo_item" onClick={handleItemClick}>
      <div className="item_data">
        <p className={isCompleted ? "completed" : ""}>{item.data}</p>
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
