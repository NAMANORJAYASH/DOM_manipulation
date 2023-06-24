document.querySelector('#read-more').addEventListener('click',make_appear);
var i=1
function make_appear(){
	if (i===1){
		i=0;
		let e0=document.createElement('div');
		let e0_1=document.createElement('div');
		let e1=document.createElement('span');
		let e2=document.createElement('button');
		document.querySelector('body').append(e0);
		e0.setAttribute('id','appear-text');
		document.querySelector('#appear-text').append(e0_1);
		e0_1.setAttribute('id','mid_div');
		document.querySelector('#mid_div').append(e1);
		e1.setAttribute('id','appeared-text');
		document.querySelector('#mid_div').append(e2);
		e2.setAttribute('id','Cross-button');
		e1.innerText='This is Additional Information. ';
		e2.innerText='X';
		document.querySelector('#Cross-button').addEventListener('click',unappear);
		window.addEventListener('click',disappear);
		}
	}
function unappear(){
	i=1;
	document.querySelector('#appear-text').remove();
	}

function disappear(e){
	if (e.target===e0){
		e0.style.display='none';
	}}