import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/contextapi'
import TodoForm from './components/Todoform';
import Todoitem from './components/Todoitem';

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => ([...prev, { id: Date.now(), ...todo }]))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => (prevTodo?.id !== id)))
  }

  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo?.id === id ? todo : prevTodo)))
  }

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo => prevTodo?.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  },[setTodo])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))
  }, [todo])

  return (
    <TodoProvider value={{ addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((todo)=>(
              <div key={todo.id}
              className='w-full'
              >
                <Todoitem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
