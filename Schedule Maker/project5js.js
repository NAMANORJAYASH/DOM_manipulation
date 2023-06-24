var i=0;
document.querySelector('#form').addEventListener('submit',value);
function value(event){
    i++;
    event.preventDefault();
    t1=document.querySelector('#text_enter').value;
    let e1=document.createElement('div');
    e1.classList.add('tasks');
    e1.setAttribute('id','task-'+i)
    let e=document.querySelector('#tasks');
    e1.innerText=t1;
    document.querySelector('#text_enter').value='';
    e.append(e1);
    e.style.display='block';
    e2=document.createElement('button');
    e2.innerText='delete';
    e2.classList.add('delete');
    e2.setAttribute('id','button-'+i)
    e1.append(e2);
    let buttons = document.querySelectorAll('button.delete');
    buttons.forEach(function(button) {
        button.addEventListener('click', deleter);
    });
    }

function deleter(event){
    d1=event.target;
    d1.parentElement.remove();

}