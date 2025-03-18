import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { dummyData } from './data/todos'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    // alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`)
    setTodos((prevTodos) => prevTodos.map(todo => (
      todo.id === id ? {...todo, completed} : todo
    )))
  }
  return (
    <main className='py-10 h-screen space-y-5'>
      <h1 className='font-bold text-3xl text-center'>Your Todos</h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5'>
        <div className='space-y-2'>
          {todos.map(todo => (
            <p key={todo.id} className='text-lg'>
              <TodoItem 
              key={todo.id}
              todo={todo} 
              onCompletedChange={setTodoCompleted}
              />
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
