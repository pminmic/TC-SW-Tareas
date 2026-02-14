import "../styles/FormTask.css";

const FormTask = ({ items, setItems }) => {

    // When the form is submitted, we prevent from refreshing the page, and we upadate the list of tasks
    const handleSubmit = e => {
        e.preventDefault();
        const text = document.getElementById("input-task").value;
        const responsible = document.getElementById("select-responsible").value;
        if (text !== "") {
            setItems([...items, { text, responsible }]);
            document.getElementById("input-task").value = "";
        }
    };

    return (
        <form id="form-task" onSubmit={handleSubmit}>
            <input className="form-input" type="text" id="input-task" placeholder="Escribe una tarea..." autoComplete="off" />
            <select className="form-select" id="select-responsible">
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Partners">Partners</option>
                <option value="Otros">Otros</option>
            </select>
            <input className="form-submit" type="submit" value="+" />
        </form>
    );
}

export default FormTask;