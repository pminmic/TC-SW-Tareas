import "../../styles/TaskResponsibleSelector.css";

// Visible to TaskList for the select in the "edit mode"
export const departments = ["Software", "Hardware", "Partners", "Otros"];

const TaskResponsibleSelector = ({ value, onChange }) => {

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