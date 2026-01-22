const TaskTextDescriptor = ({ value, onChange }) => {
    return (
        <div className="task-text-descriptor">
            <span>Tarea: </span>
            <input type="text" value={value} onChange={e => onChange(e.target.value)} />
        </div>
    );
};

export default TaskTextDescriptor;