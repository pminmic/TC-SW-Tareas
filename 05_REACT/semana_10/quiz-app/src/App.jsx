
import { useEffect, useState } from 'react';
import './App.css'
import Quiz from './pages/Quiz';

function App() {

  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      fetch("https://the-trivia-api.com/api/questions?limit=10")
      .then(response => response.json())
      .then(data => setQuiz(data))
    }

    fetchQuiz()
  }, [])

  if (quiz === null) return <div>Cargando...</div>

  return (
    <div className='app'>
      <h1 className='app-title'>Quiz app!</h1>
      <Quiz data={quiz}/>
    </div>
  );
}

export default App
