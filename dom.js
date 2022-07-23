let elem = document.getElementById('btn');
       console.log(elem);

let elem2 = document.getElementsByClassName('heading');
console.log(elem2);

let text = document.getElementById("btn").innerText;
console.log(text);

//append child
//remove child

let sel = document.querySelector('#para');
console.log(sel);

let selAll = document.querySelectorAll;
console.log(selAll);

//EVENTS
function clicked(){
    console.log('hi! you have clicked me');
}

window.onload = function load (){
    console.log('loaded');
}

//mouseover, mouseout, mouseup