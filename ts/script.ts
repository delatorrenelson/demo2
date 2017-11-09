let btn_send = document.getElementById("send");
let lbl = document.getElementById("label");
let myTextField = document.getElementById("myMessage");
let chatBox = document.getElementById("chatBox");

let todo = [];

myTextField.addEventListener("change",function(evt){
    var messageItem = document.createElement("div");
    messageItem.className = "message-container";

    var message = document.createElement("p");
    message.textContent = myTextField.value;    

    var time = document.createElement("p");
    var date = new Date();
    time.textContent = date.getMonth() +'/'+ date.getDate() +'/'+ date.getYear();
    
    messageItem.appendChild(message);
    messageItem.appendChild(time);
    chatBox.appendChild(messageItem);

    todo.push(messageItem);    
    
    myTextField.value = "";
    lbl.textContent = "";
},false);

myTextField.addEventListener("contextmenu",function(evt){
    alert("context menu.");
},false);

class Greeter{
    greeting:string;
    constructor(msg:string){
        this.greeting = msg;
    }
    greet(){
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("World");

class myGreetings extends Greeter{
    myGreets:string;
    constructor(myMsg:string){
        super();
        this.myGreets;
    }
}