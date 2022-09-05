import { isSameWeek } from 'date-fns';
import { tasklist,projectlist } from "./list";

export function add_task(){
    let taskbtn = document.querySelector('#add-task');
    let task_dom_sec = document.querySelector('.task-input-sec');

    let add_input = document.querySelector('#add-btn');
    add_input.addEventListener('click',()=>{
        tasklist();
        taskbtn.classList.toggle('active');
        task_dom_sec.classList.toggle('active');
    });
}
    

export function cancel_task(){
    let taskbtn = document.querySelector('#add-task');
    let task_dom_sec = document.querySelector('.task-input-sec');
    let close_input = document.querySelector('#close-btn');
    close_input.addEventListener('click',()=>{
        taskbtn.classList.toggle('active');
        task_dom_sec.classList.toggle('active');
    })

    taskbtn.addEventListener('click',()=>{
        task_dom_sec.classList.toggle('active');
        taskbtn.classList.toggle('active');
    })
}


export function add_project(){
     let project_add_btn = document.querySelector('#add-project');
     let project_dom_sec = document.querySelector('.project-dom');
     let addproject_input= document.querySelector('#project-add');
     addproject_input.addEventListener('click',()=>{
    projectlist();
    project_add_btn.classList.toggle('active');
    project_dom_sec.classList.toggle('active');
    });
}


export function cancel_project(){
    let project_add_btn = document.querySelector('#add-project');
    let project_dom_sec = document.querySelector('.project-dom');
    let closeproject_input = document.querySelector('#project-close');
     closeproject_input.addEventListener('click',()=>{
        project_add_btn.classList.toggle('active');
        project_dom_sec.classList.toggle('active');
    })

     project_add_btn.addEventListener('click',()=>{
     project_dom_sec.classList.toggle('active');
     project_add_btn.classList.toggle('active');
    })
}



export function today(){
    
let today_btn = document.querySelector('#today');
    today_btn.addEventListener('click',()=>{
    let task_sec = document.querySelector('.add-task');
    task_sec.style.display='flex';
    let date = document.querySelectorAll('.date');
    let text = document.querySelector('.main-head');
    text.textContent = "Today";

    let projects = document.querySelectorAll('.projects');
    projects.forEach((button)=>{
        button.classList.remove('focus');
    })

   date.forEach((input)=>{
    let today = new Date();
    let date1 = new Date(input.value);
    console.log();
    if(date1.toLocaleDateString() != today.toLocaleDateString()){
        input.parentElement.style.display = "none";
    }
   })
   })
}


export function week(){
let week_btn = document.querySelector('#week');

   week_btn.addEventListener('click',()=>{
    let task_sec = document.querySelector('.add-task');
    task_sec.style.display='flex';
    let date = document.querySelectorAll('.date');
    let text = document.querySelector('.main-head');
    text.textContent = "This week";
    
    let projects = document.querySelectorAll('.projects');
    projects.forEach((button)=>{
        button.classList.remove('focus');
    })
    
    date.forEach((input)=>{
        let today = new Date();
        let date1 = new Date(input.value);
        const result = isSameWeek(today, date1);

        console.log();
        if(result == false){
            input.parentElement.style.display = "none";
        }
        else if(result == true){
            input.parentElement.style.display = "grid";
        }
    })

})
}


export function inbox(){
let input_btn = document.querySelector('#inbox');
input_btn.addEventListener('click',()=>{
    let task_sec = document.querySelector('.add-task');
    task_sec.style.display='flex';
    let date = document.querySelectorAll('.date');
    let text = document.querySelector('.main-head');
    text.textContent = "Inbox";
    
    let projects = document.querySelectorAll('.projects');
    projects.forEach((button)=>{
        button.classList.remove('focus');
    })

    date.forEach((input)=>{
            input.parentElement.style.display = "grid";
    })

})
}

export function btn_functions(){
    add_task();
    cancel_task();
    add_project();
    cancel_project();
    today();
    week();
    inbox();
}