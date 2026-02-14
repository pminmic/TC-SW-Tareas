import ListItem from "./ListItem";
import EditItem from "./EditItem";
import { useState } from "react";
import "../styles/TaskList.css";

const TaskList = ({ items, updateList }) => {

    // Stores the index of the task that is being edited
    const [editIndex, setEditIndex] = useState(-1);

    // When the user clicks on a task, it will be removed from the list
    const handleClick = item => {
        updateList(items.filter(n => !(n.text === item.text && n.responsible === item.responsible)));
    };

    // When the user clicks on the save button in the EditItem component, this function will be called to update the task in the list
    const handleSave = () => {
        const text = document.querySelector(".edit-text").value;
        const responsible = document.querySelector(".edit-select").value;
        if (text !== "") {
            const newItems = [...items];
            newItems[editIndex] = { text, responsible };
            updateList(newItems);
            setEditIndex(-1);
        }
    };

    return (
        <div className="task-list">
            {items.map((item, i) => (
                // Just one of the items will be in edit mode
                editIndex === i ? (
                    <EditItem key={i} item={item} onSave={handleSave} onCancel={() => setEditIndex(-1)} />
                ) : (
                    <ListItem 
                        key={i} 
                        onClick={() => handleClick(item)} 
                        item={item} 
                        setEditIndex={setEditIndex} 
                        pos={i} 
                    />
                )
            ))}
        </div>
    );
};

export default TaskList;