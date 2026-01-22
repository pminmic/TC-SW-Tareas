import { useState } from "react";
import TaskResponsibleSelector from "./TaskResposibleSelector";
import TaskTextDescriptor from "./TaskTextDescriptor";

const TaskDescriptorForm = ({ onSubmit }) => {

    const [responsible, setResponsible] = useState("Software");
    const [text, setText] = useState("");

    const handleResponsibleChange = event => {
        setResponsible(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (onSubmit) onSubmit({ text, responsible });
    };

    return(
        <form onSubmit={handleSubmit}>
            <TaskTextDescriptor value={text} onChange={setText} />
            <TaskResponsibleSelector value={responsible} onChange={handleResponsibleChange} />
            <button type="submit">Añadir</button>
        </form>
    );
};

export default TaskDescriptorForm;