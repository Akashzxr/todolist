import { isSameWeek } from 'date-fns';
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


////////////////////////////////////////////////////////////////////////////////////////////
export function task(){
    let taskbtn = document.querySelector('#add-task');
    let task_dom_sec = document.querySelector('.task-input-sec');

    create_input(task_dom_sec,"task-input","add-btn","close-btn");

}

task();



export function project(){
    let project_btn = document.querySelector('#add-project');
    let project_dom_sec = document.querySelector('.project-dom');

    create_input(project_dom_sec,"project-input","project-add","project-close");
    
}
project();

function projectlist(){
    let parent = document.querySelector('.project-list');
    let input = document.querySelector('#project-input');
    createlist(parent,"projects",input);
    
    input.value='';
    let radio_btn = document.querySelectorAll('.circle');
    radio_btn.forEach( (div)=>{
        div.addEventListener('click',()=>{
            div.parentElement.remove();
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



export function tasklist(){
    let div = document.querySelector('.task-dom');
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
///////////////////////////////////////////////////////////////////////////////////////////////


export function taskonclick(){
    let taskbtn = document.querySelector('#add-task');
    let task_dom_sec = document.querySelector('.task-input-sec');

    let add_input = document.querySelector('#add-btn');
    add_input.addEventListener('click',()=>{
        tasklist();
        taskbtn.classList.toggle('active');
        task_dom_sec.classList.toggle('active');
    });
    
    let close_input = document.querySelector('#close-btn');
    close_input.addEventListener('click',()=>{
        taskbtn.classList.toggle('active');
        task_dom_sec.classList.toggle('active');
    })

    taskbtn.addEventListener('click',()=>{
        task_dom_sec.classList.toggle('active');
        taskbtn.classList.toggle('active');
    })



let project_add_btn = document.querySelector('#add-project');
let project_dom_sec = document.querySelector('.project-dom');
let addproject_input= document.querySelector('#project-add');
addproject_input.addEventListener('click',()=>{
    projectlist();
    project_add_btn.classList.toggle('active');
    project_dom_sec.classList.toggle('active');
});

let closeproject_input = document.querySelector('#project-close');
    closeproject_input.addEventListener('click',()=>{
        project_add_btn.classList.toggle('active');
        project_dom_sec.classList.toggle('active');
 })

project_add_btn.addEventListener('click',()=>{
    project_dom_sec.classList.toggle('active');
    project_add_btn.classList.toggle('active');
})




let today_btn = document.querySelector('#today');
    today_btn.addEventListener('click',()=>{
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


let week_btn = document.querySelector('#week');

   week_btn.addEventListener('click',()=>{
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



let input_btn = document.querySelector('#inbox');
input_btn.addEventListener('click',()=>{
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