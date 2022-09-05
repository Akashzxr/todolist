
export function create_input(pelement,input_id,add_id,close_id){

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


export function createlist(parentelement,classname,input,d){
    let list = document.createElement('div');
    let date = document.createElement('input');
    let text = document.createElement('div');
    if(d==1){
     list = document.createElement('div');
    date = document.createElement('input');

    let projects = document.querySelectorAll('.projects');
   projects.forEach((button)=>{
    let cla = button.childNodes[0].textContent;
    if(button.classList.contains('focus')){
        list.classList.add(cla);
    }
   })

  }
  else{
    list = document.createElement('button');
    text = document.createElement('div');
}
  


   list.classList.add(classname);
   parentelement.appendChild(list);

   text.textContent= input.value;
   text.classList.add('text');
   list.appendChild(text);

   let radio_btn = document.createElement('div');
   radio_btn.classList.add('circle');
   list.appendChild(radio_btn);

   if(d==1){
   date.classList.add('date');
   date.type = "date";
   date.placeholder = "mm/dd/yyy";
   list.appendChild(date);
}

}



export function input(){
    let taskbtn = document.querySelector('#add-task');
    let task_dom_sec = document.querySelector('.task-input-sec');

    create_input(task_dom_sec,"task-input","add-btn","close-btn");


    let project_btn = document.querySelector('#add-project');
    let project_dom_sec = document.querySelector('.project-dom');

    create_input(project_dom_sec,"project-input","project-add","project-close");
    
}
