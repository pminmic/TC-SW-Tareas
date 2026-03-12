import Answers from "../components/Answers";
import Question from "../components/Question";
import { useState } from "react";
import './Quiz.css';

const Quiz = ({ data }) => {

    const [idx, setIdx] = useState(0);
    const [opcion, setOpcion] = useState("");
    const [correctas, setCorrectas] = useState(0);

    // Restringimos el máximo de preguntas
    if (idx < 10) {

        // Construimos un array con las opciones, y lo ordenamos alfabeticamente (para evitar que la correcta siempre sea la última)
        const answers = [...data[idx].incorrectAnswers, data[idx].correctAnswer].sort();

        const handleNext = () => {
            if (opcion === data[idx].correctAnswer) setCorrectas(correctas + 1);
            setIdx(idx + 1);
            console.log(opcion);
        };

        const handleSelection = (text) => {
            setOpcion(text);
        }

        return (
            <div className="quiz">
                <Question question={data[idx].question} idx={idx} />
                {answers.map((answer, i) => {
                    return (
                        <Answers
                            text={answer}
                            setOption={handleSelection}
                            key={i}
                            selectedOption={opcion}
                        />
                    );
                })}
                <button className="submit" type="submit" onClick={handleNext}>Siguiente</button>
            </div>
        );
    }

    // Una vez realizadas las 10 preguntas obtenemos nuestra puntución
    else {
        return (
            <div className="quiz">
                <h3 className="fin">Fin del Quiz!</h3>
                <p className="text">Tu puntuación:</p>
                <p className="points">{correctas}/10</p>
            </div>
        );
    }
};

export default Quiz;