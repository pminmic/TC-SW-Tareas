const todoList = document.getElementById("todo-list");

// Función para crear nuevos elementos <li> y añadirlos a la <ul>
// Input: objeto (texto, subsistema)
const createTask = (object) => {

    // Creamos el elemento de la lista y lo añadimos después del hr si hay elemento antes
    const li = document.createElement("li");
    li.textContent = `${object.texto} (${object.subsistema})`;
    li.setAttribute("class", "task");;
        
    // Si tocamos la tarea entonces la eliminaremos de la lista y de tasks
    li.addEventListener("click", () => {

        // Eliminamos de tasks
        tasks = tasks.filter(n => n.texto != object.texto && n.subsistema != object.subsistema);

        // Eliminamos de la lista
        li.remove();
    });
    
    todoList.appendChild(li);
}

// Vamos a hacer que las tareas sean únicas
// tasks es una lista de objetos (texto, subsistema)
let tasks = [];

const createTaskObject = (t, s) => {
    return {texto: t, subsistema: s};
};

// Si la tarea existe devuelve 1 (true), en caso contrario 0
// Input: objeto (texto, subsistema)
const existentTask = (object) => {
    return tasks.filter(n => n.texto == object.texto && n.subsistema == object.subsistema).length;
};

const formSubmit = document.getElementById("form");
formSubmit.addEventListener("submit", () => {
    
    // Evita que el formulario se envie y recarge la página
    event.preventDefault();

    // Extraemos el texto y el valor del select
    const textInput = formSubmit.elements.taskInput.value;
    const responsible = formSubmit.elements.responsibleInput.value;
    const task = createTaskObject(textInput, responsible);

    // Añadimos la tarea si no existe en tasks y tiene texto
    if (!existentTask(task) && textInput != "") {
        createTask(task);
        tasks.push(task);
    }
    else {
        alert("No es una tarea válida o ya existe.");
    }    
});
