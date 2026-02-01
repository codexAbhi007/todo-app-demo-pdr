import TodoItem from "./TodoItem"

const TodoList = ({ todos, onEdit, onDelete }) => {
  if (todos.length === 0) {
    return (
      <p className="text-zinc-400 text-center mt-4">
        No tasks yet
      </p>
    )
  }

  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
