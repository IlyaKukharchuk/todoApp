export default function RemoveButton({ data }) {
  function removeTodo() {
    console.log(data);
  }
  return (
    <button className="btn" onClick={removeTodo}>
      ×
    </button>
  );
}
