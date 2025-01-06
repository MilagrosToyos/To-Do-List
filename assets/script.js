
function hideElement(element){
    element.style.display="none";
}

/*funcion  que al  apretar "add" se cree un nuevo item de lista*/
function addItem(){
    var li = document.createElement("li");
    
    var innput = document.getElementById("btnAdd");
    li.innerHTML = innput.value;
    innput.value = "";

    document.getElementById("list_tasks").appendChild(li);
    li.className = "justify-content-between align-items-center";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    checkbox.value = "";

    var label = document.createElement("label");
    label.className = "form-check-label";
    label.appendChild(checkbox);
    
    var del = document.createElement("i");
    del.className = "fas fa-trash-alt";
    del.onclick = function(){
        li.remove();
    }
    label.appendChild(del);

    var edit = document.createElement("i");
    edit.className = "fas fa-pencil-alt";
    edit.onclick = function(){
        alert("Edit");
    }
    label.appendChild(edit);

    document.getElementById("list_tasks").appendChild(label);
}


/*<a href="#!" class="text-info" data-mdb-tooltip-init title="Edit todo"><i class="fas fa-pencil-alt me-3"></i></a>
<a href="#!" class="text-danger" data-mdb-tooltip-init title="Delete todo"><i class="fas fa-trash-alt"></i></a>
*/
/*
 funcion que crea un checkbox al elemento creado
 */
/*function createCheckbox(){
    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    checkbox.value = "";

    var label = document.createElement("label");
    label.className = "form-check-label";
    label.appendChild(checkbox);

    document.getElementById("list_tasks").appendChild(label);
}*/

function  main(){
    addItem();
};

main();
