const functionSave= (valor)=>{
    const Todos = JSON.parse(localStorage.getItem('todo'))||[];
    Todos.push(valor);
    localStorage.setItem('todo', JSON.stringify(Todos));
}

const createElement = (task)=>{
    let node=document.createElement('div');
    let template=(task)=>{
        return `<div class="" id="" <span>${task}</span></div>`;
    }
    node.innerHTML=template(task);
    return node.firstChild;

}

const printTask=(task)=>{
    let taskItemElement = createElement(task);
    document.querySelector('.taskList').appendChild(taskItemElement);
}

document.addEventListener('DOMContentLoaded',()=>{
 

    let input = document.querySelector('.addSection input');


    input.addEventListener('keyup',(e)=>{
        let text=e.target.value.trim();
        if(e.keyCode===13){
            functionSave(text);
            printTask(text);
           
        }
     
    })
    
});