
function hideElement(element){
    element.style.display="none";
}

/*funcion  que al  apretar "add" se cree un nuevo item de lista*/
function addItem() { 
    // Crear un nuevo elemento de la lista 
    var li = document.createElement("li"); 
    li.className = "list-group-item d-flex justify-content-between align-items-center ms-auto";
    var innput = document.getElementById("btnAdd"); 
    li.textContent = innput.value;
    innput.value = "";    

    // Crear el contenedor de la tarea 
    var taskContainer = document.createElement("div"); 
    taskContainer.className = "d-flex align-items-center";

    // Crear el checkbox 
    var checkbox = document.createElement("input"); 
    checkbox.type = "checkbox"; 
    checkbox.className = "form-check-input"; 
    taskContainer.appendChild(checkbox);

    // Crear el contenedor de los íconos 
    var iconContainer = document.createElement("div"); 
    iconContainer.className = "ms-auto relative";

    // Crear el ícono de editar 
    var edit = document.createElement("i"); 
    edit.className = "fas fa-pencil-alt m-1"; 
    edit.onclick = function() { alert("Edit"); }; 
    iconContainer.appendChild(edit);

    // Crear el ícono de eliminar 
    var del = document.createElement("i"); 
    del.className = "fas fa-trash-alt"; 
    del.onclick = function() { li.remove(); }; 
    iconContainer.appendChild(del); 

    // Añadir el checkbox y el contenido de la tarea al contenedor de la tarea 
    taskContainer.appendChild(li.firstChild); 
    taskContainer.appendChild(iconContainer); 

    // Añadir el contenedor de la tarea al elemento de la lista 
    li.appendChild(taskContainer); 

    // Añadir el elemento de la lista al ul 
    document.getElementById("list_tasks").appendChild(li);
    
    iconContainer.style.position = "absolute";
    iconContainer.style.right = 0;
}

function  main(){
    addItem();
};

main();
