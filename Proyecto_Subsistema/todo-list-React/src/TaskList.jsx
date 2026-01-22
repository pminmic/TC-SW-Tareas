import ListItem from "./ListItem";

const TaskList = ({ items, updateList }) => {

    const handleClick = item => {
        updateList(items.filter(n => !(n.text === item.text && n.responsible === item.responsible)));
    };

    return(
        <div>
            <h2>Tareas pendientes</h2>
            <ul>
                {items.map((item, i) => (
                    <ListItem key={i} onClick={() => handleClick(item)} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;