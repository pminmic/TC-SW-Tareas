
import { useEffect, useState } from 'react';
import './App.css'
import Quiz from './pages/Quiz';

function App() {

  const [quiz, setQuiz] = useState(null);

  // Mediante la API y las promises del fetch obtenemos las preguntas y las añadimos al estado
  useEffect(() => {
    const fetchQuiz = async () => {
      fetch("https://the-trivia-api.com/api/questions?limit=10")
      .then(response => response.json())
      .then(data => setQuiz(data))
    }

    fetchQuiz()
  }, [])

  // Mientras no tengamos las preguntas aparecera esto
  if (quiz === null) return <div>Cargando...</div>

  // Return una vez tenemos las preguntas
  return (
    <div className='app'>
      <h1 className='app-title'>Quiz app!</h1>
      <Quiz data={quiz}/>
    </div>
  );
}

export default App
