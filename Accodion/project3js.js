
//variables
var b1=document.querySelector('#button-1');
var b2=document.querySelector('#button-2');
var b3=document.querySelector('#button-3');
var a1=document.querySelector('#answer1');
var a2=document.querySelector('#answer2');
var a3=document.querySelector('#answer3');
var i=1;
var j=1;
var k=1;

//event listener
b1.addEventListener('click',b1_open)
b2.addEventListener('click',b2_open)
b3.addEventListener('click',b3_open)

//functions
function b1_open(){
    if (i==1) {
        b1.innerText='-';
        i=0;
        a1.style.display='block'}
    else if (i==0) {
        b1.innerText='+';
        i=1;
        a1.style.display='none'}
    }

function b2_open(){
    if (j==1) {
        b2.innerText='-';
        j=0;
        a2.style.display='block'}
    else if (j==0) {
        b2.innerText='+';
        j=1;
        a2.style.display='none'}
    }

function b3_open(){
    if (k==1) {
        b3.innerText='-';
        k=0;
        a3.style.display='block'}
    else if (k==0) {
        b3.innerText='+';
        k=1;
        a3.style.display='none'}
    }