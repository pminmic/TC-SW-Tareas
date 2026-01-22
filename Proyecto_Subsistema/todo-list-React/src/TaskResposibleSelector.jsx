const TaskResponsibleSelector = ({ value, onChange }) => {

    const departments = ["Software", "Hardware", "Partners", "Otros"];

    return (
        <div>
            <span>Responsable: </span>
            <select value={value} onChange={onChange}>
                {departments.map((department, i) => {return(<option key={i} value={department}>{department}</option>);})}
            </select>
        </div>
    );
};

export default TaskResponsibleSelector;