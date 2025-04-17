import RemoveButton from "./buttons/RemoveButton";

export default function Todo({ data }) {
  return (
    <div class="todo_item">
      <div className="item_data">
        <p>{data}</p>
      </div>
      <div className="item-data">
        <RemoveButton key={data} />
      </div>
    </div>
  );
}
