import './Answers.css';

const Answers = ({ text, setOption, name, selectedOption, id }) => {
    const checked = selectedOption === text;

    return (
        <div className={`answer ${checked ? "checked" : ""}`} onClick={() => setOption(text)}>
            {text}
        </div>
    );
};

export default Answers;