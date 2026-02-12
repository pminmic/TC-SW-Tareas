import React, { useState } from "react";

import ListItem from "./ListItem";
import { departments } from "../TaskDescriptor/TaskResposibleSelector";
import "../../styles/TaskList.css";

const TaskList = ({ items, updateList }) => {

    // Index of the task is currently being edited
    const [editIndex, setEditIndex] = useState(null);

    // Copy of `items` just in case we press cancel in "edit mode"
    const [drafts, setDrafts] = useState([]);

    // Deletes the task from items
    const handleClick = item => {
        updateList(items.filter(n => !(n.text === item.text && n.responsible === item.responsible)));
    };

    // "Edit mode" -> save index of the task is being edited and copy of previous items (just in case)
    const startEdit = pos => {
        setEditIndex(pos);
        setDrafts(items.map(it => ({ ...it })));
    };

    // Updates everytime is a change in the text input or in the select and saves it in the correct position
    const handleDraftChange = (pos, field, value) => {
        const newDrafts = [...drafts];
        newDrafts[pos] = { ...newDrafts[pos], [field]: value };
        setDrafts(newDrafts);    
    };

    // Updates the items
    const updateItem = pos => {
        if (drafts[pos].text !== "" 
            && !items.filter(item => item.text === drafts[pos].text && item.responsible === drafts[pos].responsible).length
        ) {
            const newList = [...items];
            newList[pos] = { ...drafts[pos] };
            updateList(newList);
            setEditIndex(null);
        }
        else {
            alert("La tarea no válida o ya existe");
        }
    };

    return(
        <div className="task-list">
            <h2 className="sec-title">Tareas pendientes</h2>
            <ul className="list">
                {items.map((item, i) => (
                    editIndex === i ? (
                        <div key={i} className="item-edit">
                            <input
                                type="text"
                                // Optional chaining just in case
                                value={drafts[i]?.text || ""}
                                className="item-input"
                                onChange={e => handleDraftChange(i, "text", e.target.value)}
                            />
                            <select
                                // Optional chaining just in case
                                value={drafts[i]?.responsible || ""}
                                className="item-select"
                                onChange={e => handleDraftChange(i, "responsible", e.target.value)}
                            >
                                {departments.map((dep, j) => (
                                    <option key={j} value={dep} label={dep}></option>
                                ))}
                            </select>
                            <div className="edit-button" onClick={() => updateItem(i)}>Save</div>
                            <div className="edit-button" onClick={() => setEditIndex(null)}>Cancel</div>
                        </div>
                    ) : (
                        <div key={i} className="item">
                            <ListItem onClick={() => handleClick(item)} item={item} />
                            <div className="edit-button" onClick={() => startEdit(i)}>Edit</div>
                        </div>
                    )
                ))}
            </ul>
        </div>
    );
};

export default TaskList;