import './styles/App.css';
import TaskDescriptor from './components/TaskDescriptor/TaskDescriptor';

function App() {

  return (
    <div className='app'>
      <h1 className='title'>Lista de tareas</h1>
      <TaskDescriptor />
    </div>
  )
}

export default App
