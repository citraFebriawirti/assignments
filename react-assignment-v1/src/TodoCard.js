function TodoCard({ id, title, status }) {
  return (
    <div
      className="todo-card"
      onClick={() => alert(`todo dengan id ${id} telah di clicked`)}
    >
      <h2>{title}</h2>
      <p>{status}</p>
    </div>
  );
}

export default TodoCard;
