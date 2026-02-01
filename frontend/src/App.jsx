import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const App = () => {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("Medium")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    if (editId) {
      setTodos(
        todos.map(todo =>
          todo.id === editId
            ? { ...todo, title, priority }
            : todo
        )
      )
      setEditId(null)
    } else {
      setTodos([
        ...todos,
        { id: uuidv4(), title, priority }
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

        <TodoForm
          title={title}
          priority={priority}
          setTitle={setTitle}
          setPriority={setPriority}
          handleSubmit={handleSubmit}
          editId={editId}
        />

        <TodoList
          todos={todos}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default App
