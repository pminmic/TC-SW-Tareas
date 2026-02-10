import "../../styles/ListItem.css";

const ListItem = ({ item, onClick }) => {
    return(
        <li className="item-list" onClick={onClick}>{`${item.text} (${item.responsible})`}</li>
    );
};

export default ListItem;