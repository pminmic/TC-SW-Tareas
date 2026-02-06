import ListItem from "./ListItem";
import "./TaskList.css"

const TaskList = ({ items, updateList }) => {

    const handleClick = item => {
        updateList(items.filter(n => !(n.text === item.text && n.responsible === item.responsible)));
    };

    return(
        <div className="task-list">
            <h2 className="sec-title">Tareas pendientes</h2>
            <ul className="list">
                {items.map((item, i) => (
                    <ListItem key={i} onClick={() => handleClick(item)} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;