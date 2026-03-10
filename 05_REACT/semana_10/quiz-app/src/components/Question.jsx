import './Question.css';

const Question = ({question, idx}) => {


    return(
        <div className='container'>
            <h3 className="num">Question {idx+1}</h3>
            <p className="question">{question}</p>
        </div>
    );
};

export default Question;