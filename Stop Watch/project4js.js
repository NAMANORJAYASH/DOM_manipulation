var timer=document.querySelector('#timer');
var button1=document.querySelector('#button1');
var button2=document.querySelector('#button2');
var button1_2;
var button1_3;
var seconds=0;
var minutes=0;
var hours=0;
var i=1;
var j=1;

button1.addEventListener('click',go);
button2.addEventListener('click',reset);


function go(){
    if (j==1) {
        window.setInterval(keepgoing,1000)
        j=0};
    button1.innerText='Pause';
    button1.removeAttribute('id','button1');
    button1.setAttribute('id','button1_2');
    button1_2=document.querySelector('#button1_2');
    button1_2.addEventListener('click',pause);
}



function keepgoing(){
    if(i==1){
    seconds++
    if(seconds>=60){
        minutes++;
        seconds=0;
        if (minutes>=60) {
            hours++;
            minutes=0;  
        }}}
        timer.innerText=hours + ':' + minutes + ':' + seconds;}



function pause(){
    i=0
    button1_2.innerText='Resume';
    button1_2.setAttribute('id','button1_3');
    button1_3=document.querySelector('#button1_3');
    button1_3.removeEventListener('click',pause)
    button1_3.addEventListener('click',resume);
    }

    
function resume() {
    i = 1;
    button1_3 = document.querySelector('#button1_3');
    button1_3.innerText = 'Pause';
    button1_3.setAttribute('id', 'button1_2');
    button1_2 = document.querySelector('#button1_2');
    button1_2.addEventListener('click', pause);
    }
    

function reset(){
    hours=0;
    minutes=0;
    seconds=0;
    if(i==0){
        button1_3.innerText='Start';
    }
}