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
    lbl.textContent = "Hi";
},false);

let myTextField = document.getElementById("txt");

myTextField.addEventListener("input",function(evt){
    lbl.textContent = myTextField.value;
},false);