import { useState } from "react";
import TaskResponsibleSelector from "./TaskResposibleSelector";
import TaskTextDescriptor from "./TaskTextDescriptor";
import "../../styles/TaskDescriptorForm.css";

const TaskDescriptorForm = ({ onSubmit }) => {

    const [responsible, setResponsible] = useState("Software");
    const [text, setText] = useState("");

    const handleResponsibleChange = event => {
        setResponsible(event.target.value);
    };

    const handleSubmit = event => {
        // Prevenimos que se actualize (porque es un form)
        event.preventDefault();
        if (onSubmit) onSubmit({ text, responsible });
        // Vaciamos el input de texto
        setText("");
    };

    return(
        <form onSubmit={handleSubmit} className="form">
            <TaskTextDescriptor value={text} onChange={setText} />
            <TaskResponsibleSelector value={responsible} onChange={handleResponsibleChange} />
            <button type="submit" className="submit">Añadir</button>
        </form>
    );
};

export default TaskDescriptorForm;