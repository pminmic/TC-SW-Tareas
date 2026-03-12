import './Answers.css';

const Answers = ({ text, setOption, selectedOption }) => {
    const checked = selectedOption === text;

    // Cada div es una respuesta, lo renderizamos en Quiz.jsx
    return (
        <div className={`answer ${checked ? "checked" : ""}`} onClick={() => setOption(text)}>
            {text}
        </div>
    );
};

export default Answers;