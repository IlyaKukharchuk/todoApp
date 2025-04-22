import style from "./footer.module.css";
export default function Footer({ todos, completedTodosAmount }) {
  return (
    <footer className={style.footer}>
      <div className="footer_item first">
        <div className="statistics">Tasks done: {completedTodosAmount}</div>
        <div className="statistics">Total tasks: {todos.length}</div>
      </div>
      <div className="footer_item second">
        <span>2025 © Ilya Kukharchuk</span>
      </div>
    </footer>
  );
}
