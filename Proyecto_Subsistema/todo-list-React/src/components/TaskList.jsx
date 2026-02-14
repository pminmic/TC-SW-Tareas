import ListItem from "./ListItem";
import EditItem from "./EditItem";
import { useState } from "react";
import "../styles/TaskList.css";

const TaskList = ({ items, updateList }) => {

    const [editIndex, setEditIndex] = useState(-1);

    const handleClick = item => {
        updateList(items.filter(n => !(n.text === item.text && n.responsible === item.responsible)));
    };

    const handleSave = item => {
        const text = document.querySelector(".edit-item input").value;
        const responsible = document.querySelector(".edit-item select").value;
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