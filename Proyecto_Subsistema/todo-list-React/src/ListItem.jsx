const ListItem = ({ item, onClick }) => {
    return(
        <li onClick={onClick}>{`${item.text} (${item.responsible})`}</li>
    );
};

export default ListItem;