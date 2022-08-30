
export function create_dom(btn,pelement,input_id,add_id,close_id){
    
    btn.style.display="none";

    let input = document.createElement('input');
    input.type = "text";
    input.classList.add('task-input');
    input.id = input_id;
    pelement.appendChild(input);
    
    let add_btn = document.createElement('button');
    add_btn.classList.add('add-btn');
    add_btn.id = add_id;
    add_btn.textContent = "Add";

    let close_btn = document.createElement('button');
    close_btn.classList.add('close-btn');
    close_btn.id = close_id;
    close_btn.textContent = "Cancel";

    pelement.appendChild(add_btn);
    pelement.appendChild(close_btn);
}


export function createlist(div,parentelement,classname,input){
   div.style.display = "none";

   let list = document.createElement('div');
   list.classList.add(classname);
   list.textContent = input.value;
   parentelement.appendChild(list);
}


////////////////////////////////////////////////////////////////////////////////////////////
export function task(){
    let taskbtn = document.querySelector('#add-task');
    let task_dom_sec = document.querySelector('.task-dom');

    create_dom(taskbtn,task_dom_sec,"task-input","add-btn","close-btn");
    let add_task = document.querySelector('#add-btn');
    add_task.addEventListener('click',()=>{
        tasklist();
        taskbtn.style.display="block";
    });

}

export function project(){
    let project_btn = document.querySelector('#add-project');
    let project_dom_sec = document.querySelector('.project-dom');

    create_dom(project_btn,project_dom_sec,"project-input","project-add","project-close");
}

export function tasklist(){
    let div = document.querySelector('.task-dom');
    let parent = document.querySelector('.task-list');
    let input = document.querySelector('#task-input');

    createlist(div,parent,"tasks",input);
}
///////////////////////////////////////////////////////////////////////////////////////////////



export function taskonclick(){

let task_add_btn = document.querySelector('#add-task');
task_add_btn.addEventListener('click',task);


let project_add_btn = document.querySelector('#add-project');
project_add_btn.addEventListener('click',project);

}