import { useState } from "react";
import TaskDescriptorForm from "./TaskDescriptorForm";
import TaskList from "./TaskList";

const TaskDescriptor = () => {
    const [items, setItems] = useState([]);

    const inItems = (task) => {
        return items.some(n => n.text === task.text && n.responsible === task.responsible);
    };

    const handleAdd = task => {
        if (task.text !== "" && !inItems(task)) {
            setItems(prev => [...prev, task]);
        } else {
            alert("La tarea ya se encuentra en la lista o no es válida.");
        }
    };

    return (
        <div>
            <div className="task-descriptor">
                <TaskDescriptorForm onSubmit={handleAdd} />
            </div>
            <div className="task-list">
                <TaskList items={items} updateList={setItems} />
            </div>
        </div>
    );
}

export default TaskDescriptor;