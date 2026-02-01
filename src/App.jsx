import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const App = () => {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("Medium")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) return

    // UPDATE
    if (editId) {
      setTodos(
        todos.map(todo =>
          todo.id === editId
            ? { ...todo, title, priority }
            : todo
        )
      )
      setEditId(null)
    }
    // CREATE
    else {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title,
          priority,
        },
      ])
    }

    setTitle("")
    setPriority("Medium")
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (todo) => {
    setTitle(todo.title)
    setPriority(todo.priority)
    setEditId(todo.id)
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-900 text-white">
      <div className="w-full max-w-xl bg-zinc-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold">Todo App</h1>

        {/* FORM */}
        <form className="flex gap-2 my-4" onSubmit={handleSubmit}>
          <input
            className="flex-1 bg-zinc-700 px-3 py-2 rounded-md outline-none"
            placeholder="New Task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="bg-zinc-700 px-2 rounded-md"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button className="bg-blue-600 px-4 rounded-md hover:bg-blue-800">
            {editId ? "Update" : "Add"}
          </button>
        </form>

        {/* TODO LIST */}
        <ul className="space-y-3">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-zinc-700 px-4 py-2 rounded-md"
            >
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
                  onClick={() => handleEdit(todo)}
                  className="text-blue-400 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-zinc-400 text-center mt-4">
            No tasks yet
          </p>
        )}
      </div>
    </div>
  )
}

export default App
