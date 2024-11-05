import {features} from './service.js'

window.addEventListener('load', bindEvents);

function bindEvents(){
    document.querySelector("#addBtn").addEventListener("click",getInput);
    console.log("get input function called");

    document.querySelector("#completed").addEventListener("click", filterCompletedTasks);
    document.querySelector("#active").addEventListener("click", filterActiveTasks);
    document.querySelector("#all").addEventListener("click", printTasks);
}

function filterActiveTasks(){
    let mainDiv = document.querySelector(".tasks");
    mainDiv.innerHTML = "";

    for(let task of features.tasks){
        if(!task.completed){
            printTask(task);
        }
    }
}

function filterCompletedTasks(){
    let mainDiv = document.querySelector(".tasks");
    mainDiv.innerHTML = "";

    for(let task of features.tasks){
        if(task.completed){
            printTask(task);
        }
    }
}


function getInput(){
    let taskText = document.querySelector("#taskInput").value;
    if(taskText != ""){
        let task = {task:taskText, completed:false}
        features.tasks.push(task);
        printTasks();
        document.querySelector("#taskInput").value = "";
    }
}

function printTasks(){
    let mainDiv = document.querySelector(".tasks");
    mainDiv.innerHTML = "";

    console.log(features.tasks);
    for(let task of features.tasks){
    printTask(task);
    }
    
}

function deleteTask(task){
    if(features.deleteTask(task)){
        printTasks();
    }
}

function editTask(task){
    if(features.editTask(task)){
        printTasks();
    }
}

function printTask(task){
    let mainDiv = document.querySelector(".tasks");

    let div = document.createElement("div");
    div.className = "alert alert-light";

    let check = document.createElement("input");
    check.type = "checkbox";

    let divMiddle = document.createElement("div");

    let line = document.createElement("hr");
    line.className = "line";
    
    let h3 = document.createElement("h3");
    h3.innerText = task.task;

    if (task.completed) {
        check.checked = true;
        line.style.display = "block"; 
        h3.style.color = "red"; 
     } else {
        line.style.display = "none"; 
        h3.style.color = "black"; 
     }

    check.addEventListener("click", ()=>{
       
        if (task.completed) {
           task.completed = false;
           line.style.display = "none"; 
           h3.style.color = "black"; 
        } else {
           task.completed = true;
           line.style.display = "block"; 
           h3.style.color = "red"; 
        }
    });

    let divIcons = document.createElement("div");

    let i1 = document.createElement("i");
    i1.className = "fa-regular fa-pen-to-square";
    i1.addEventListener("click",()=>editTask(task))

    let i2 = document.createElement("i");
    i2.className = "fa-solid fa-trash";
    i2.addEventListener("click",()=>deleteTask(task));

    div.appendChild(check);
    div.appendChild(divMiddle);
    divMiddle.appendChild(line);
    divMiddle.appendChild(h3);
    divIcons.appendChild(i1);
    divIcons.appendChild(i2);
    div.appendChild(divIcons);
    mainDiv.appendChild(div);

}