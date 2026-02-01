const TodoForm = ({
  title,
  priority,
  setTitle,
  setPriority,
  handleSubmit,
  editId
}) => {
  return (
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
  )
}

export default TodoForm
