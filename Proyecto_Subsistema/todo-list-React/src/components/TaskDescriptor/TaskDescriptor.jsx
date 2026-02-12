import { useState } from "react";
import TaskDescriptorForm from "./TaskDescriptorForm";
import TaskList from "../TaskList/TaskList";
import "../../styles/TaskDescriptor.css";

const TaskDescriptor = () => {

    // Array of object with all the items of the list
    const [items, setItems] = useState([]);

    // Check the new task is unique
    const inItems = (task) => {
        return items.some(n => n.text === task.text && n.responsible === task.responsible);
    };

    // Add the values to items
    const handleAdd = task => {
        if (task.text !== "" && !inItems(task)) {
            setItems(prev => [...prev, task]);
        } else {
            alert("La tarea ya se encuentra en la lista o no es válida.");
        }
    };

    return (
        <div className="task-descriptor">
            <TaskDescriptorForm onSubmit={handleAdd} />        
            <TaskList items={items} updateList={setItems} />
        </div>
    );
};

export default TaskDescriptor;