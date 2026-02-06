import "./TaskResponsibleSelector.css";

const TaskResponsibleSelector = ({ value, onChange }) => {

    const departments = ["Software", "Hardware", "Partners", "Otros"];

    return (
        <div className="task-resposible-select">
            <span className="responsible-text">Responsable: </span>
            <select value={value} onChange={onChange} className="select">
                {departments.map((department, i) => {return(<option key={i} value={department}>{department}</option>);})}
            </select>
        </div>
    );
};

export default TaskResponsibleSelector;