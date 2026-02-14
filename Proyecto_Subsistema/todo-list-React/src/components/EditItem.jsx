import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";

const EditItem = ({ item, onSave, onCancel }) => {


    return (

        <div className="edit-item">
            <input className="edit-text" type="text" defaultValue={item.text} />
            <select className="edit-select" defaultValue={item.responsible}>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Partners">Partners</option>
                <option value="Otros">Otros</option>
            </select>
            <button className="button" onClick={() => onSave(item)}><FaSave /></button>
            <button className="button"onClick={onCancel}><MdCancel /></button>
        </div>
    );


};

export default EditItem;