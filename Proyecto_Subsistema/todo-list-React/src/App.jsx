import './styles/App.css';
import FormTask from './components/FormTask';
import TaskList from './components/TaskList';
import { useState } from 'react';
import todoImage from "./assets/todo.png";

function App() {


  const [items, setItems] = useState([]);

  return (
    <>
      <div className="todo-header">
        <img className="todo-image" src={todoImage} alt="Todo List" width="60" />
        <h1 className="todo-title">To Do List</h1>
      </div>
      <FormTask items={items} setItems={setItems} />
      <TaskList items={items} updateList={setItems} />
    </>
  )
}

export default App
