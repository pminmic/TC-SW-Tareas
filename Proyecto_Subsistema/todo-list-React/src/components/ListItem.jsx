import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

const ListItem = ({ item, onClick, setEditIndex, pos }) => {

    // Used to comunicate between the checkbox and the styles of the "item"
    const [checked, setChecked] = useState(false);

    return (
        <div className="list-item">
            <input className="check-item" type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
            <span className="item">
                <span className="item-text" style={{ textDecoration: checked ? "line-through" : "none" }}>{item.text}</span>
                <span className="item-responsible" style={{ textDecoration: checked ? "line-through" : "none" }}>{item.responsible}</span>
            </span>
            <button className="button" onClick={() => setEditIndex(pos)}><FaEdit /></button>
            <button className="button" onClick={onClick}><IoTrashBin /></button>
        </div>
    );
};

export default ListItem;