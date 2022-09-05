import { input } from "./task";
import { createlist } from "./task";
input();

export function tasklist(){
    let parent = document.querySelector('.task-list');
    let input = document.querySelector('#task-input');

    createlist(parent,"tasks",input,1);

    input.value = '';
    let radio_btn = document.querySelectorAll('.circle');
    radio_btn.forEach( (div)=>{
        div.addEventListener('click',()=>{
            div.parentElement.remove();

        })
    })
}



export function projectlist(){
    let parent = document.querySelector('.project-list');
    let input = document.querySelector('#project-input');
    createlist(parent,"projects",input);
    
    input.value='';
    let radio_btn = document.querySelectorAll('.circle');
    radio_btn.forEach( (div)=>{
        div.addEventListener('click',()=>{
            div.parentElement.remove();
            let cla = div.parentElement.childNodes[0].textContent;
            let task = document.querySelectorAll('.tasks');
            let task_sec = document.querySelector('.add-task');
            task_sec.style.display='none';
            task.forEach((div)=>{
                if(div.classList.contains(cla)){
                    div.remove();
                }
            })
        })
    })


    let projects = document.querySelectorAll('.projects');
   projects.forEach((button)=>{
    button.addEventListener('click',()=>{

       projects.forEach((button)=>{
        button.classList.remove('focus');
       })

       button.classList.add('focus');
     
      let tasks = document.querySelectorAll('.tasks');
      let cla = button.childNodes[0].textContent;
      let text = document.querySelector('.main-head');
      text.textContent = cla;

      tasks.forEach((div)=>{
        if(div.classList.contains(cla)){
            div.style.display = 'grid';
        }
        else{
            div.style.display = 'none';
        }
      })

    })
   })
   
}