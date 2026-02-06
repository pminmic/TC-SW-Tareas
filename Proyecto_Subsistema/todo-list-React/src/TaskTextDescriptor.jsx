import "./TaskTextDescriptor.css"

const TaskTextDescriptor = ({ value, onChange }) => {
    return (
        <div className="task-text-descriptor">
            <span className="task-title">Tarea</span>
            <input className="input-text" type="text" placeholder="p. ej. Terminar Tarea CSS" value={value} onChange={e => onChange(e.target.value)} />
        </div>
    );
};

export default TaskTextDescriptor;