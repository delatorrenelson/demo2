alert("Hello World");
class Animals{
    live:1;
    canEat(food){
        return "I'm eating.."+food;
    }
}

class Mammals extends Animals{
    canEat(fish:"fish");
}

let btn = document.getElementById("mybutton");
let lbl = document.getElementById('label');

btn.addEventListener('click',function(evt){
    lbl.textContent = "You clicked he button";
},false);

let myTextField = document.getElementById("txt");

myTextField.addEventListener("input",function(evt){
    lbl.textContent = myTextField.value;
},false);

let todo = [];

let myToDo = document.getElementById("myToDo");

myTextField.addEventListener("change",function(evt){
    var item = document.createElement("li");
    item.textContent = myTextField.value;
    todo.push(item);
    myToDo.appendChild(item);
    myTextField.value = "";
    lbl.textContent = "";
},false);

myTextField.addEventListener("contextmenu",function(evt){
    alert("context menu.");
},false);