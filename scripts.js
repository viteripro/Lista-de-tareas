const LIST=document.querySelector("#list");

document.querySelector("#button").addEventListener("click",readValue);
LIST.addEventListener("keydown",tecla);

function readValue(){
    const ELEMENT=LIST.value;
    (ELEMENT) && createList(correctName(ELEMENT));
    vaciar();
}

function tecla(e){
  (e.key==="Enter") && readValue();     
}

function correctName(task){
    let correctName=`${task.substring(0,1).toUpperCase()}${task.substring(1).toLowerCase()}`;
    return correctName;
}

function createList(task){
      document.querySelector(".tasks").insertAdjacentHTML("beforeend",`
    <p class="list-item">${task}<button class="delete-button">Eliminar </button> </p>`);
    document.querySelector(".delete-button").addEventListener("click", deleteTask);
   
}


function vaciar(){
  LIST.value="";
  LIST.focus();
}


function deleteTask(){
    document.querySelector(".tasks").removeChild("p");
 }