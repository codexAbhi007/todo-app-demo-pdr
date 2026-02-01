const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-zinc-700 px-4 py-2 rounded-md">
      <div>
        <p className="font-semibold">{todo.title}</p>
        <span
          className={`text-sm ${
            todo.priority === "High"
              ? "text-red-400"
              : todo.priority === "Medium"
              ? "text-yellow-400"
              : "text-green-400"
          }`}
        >
          {todo.priority}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(todo)}
          className="text-blue-400 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-400 hover:underline"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
