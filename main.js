const AddTaskBtn=document.querySelector(".new-task-btn");
const NewTaskInput=document.querySelector(".new-task-input");
const TasksListUl=document.querySelector(".todolist");
const ListElement=document.querySelector(".todolist-task");

AddTaskBtn.classList.add("disabled"); 






function getListElements(){
  let li=document.querySelectorAll("li");
  for(let i=0; i<=li.length; i++){

 
  }
  



}




function EmptyTaskInput(){
  if (NewTaskInput.value!==''){
    AddTaskBtn.classList.remove("disabled"); 
  }
} 

function DeleteTask(event) {
  event.srcElement.parentElement.remove();
}

function AddNewTask(){



  AddTaskBtn.classList.add("disabled");
   
  const newListElement=document.createElement('li');
   newListElement.classList.add("todolist-task");
   const newTask=document.createElement('p');
   const deleteTask=document.createElement('i');
   deleteTask.classList.add("fa-solid");
   deleteTask.classList.add("fa-x");
   newTask.classList.add("task");
   newTask.innerHTML=NewTaskInput.value;
   newListElement.addEventListener("click", TaskDone);
   deleteTask.addEventListener("click", DeleteTask);
   TasksListUl.appendChild(newListElement);
   newListElement.appendChild(newTask);

   newListElement.appendChild(deleteTask);
   NewTaskInput.value='';
   getListElements();
   

   function TaskDone(){
    newTask.classList.toggle("done");
    newListElement.classList.toggle("colored");
  }
  
  
}





NewTaskInput.addEventListener("input",EmptyTaskInput);
AddTaskBtn.addEventListener("click",AddNewTask);
//AddTaskBtn.addEventListener("click",getListElements);

