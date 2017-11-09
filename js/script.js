var __extends = this && this.__extends || function() {
    var e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
        function r() {
            this.constructor = t;
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
        new r());
    };
}(), btn_send = document.getElementById("send"), lbl = document.getElementById("label"), myTextField = document.getElementById("myMessage"), chatBox = document.getElementById("chatBox"), todo = [];

myTextField.addEventListener("change", function(e) {
    var t = document.createElement("div");
    t.className = "message-container";
    var n = document.createElement("p");
    n.textContent = myTextField.value;
    var r = document.createElement("p"), o = new Date();
    r.textContent = o.getMonth() + "/" + o.getDate() + "/" + o.getYear(), t.appendChild(n), 
    t.appendChild(r), chatBox.appendChild(t), todo.push(t), myTextField.value = "", 
    lbl.textContent = "";
}, !1), myTextField.addEventListener("contextmenu", function(e) {
    alert("context menu.");
}, !1);

var Greeter = function() {
    function e(e) {
        this.greeting = e;
    }
    return e.prototype.greet = function() {
        return "Hello, " + this.greeting;
    }, e;
}(), greeter = new Greeter("World"), myGreetings = function(e) {
    function t(t) {
        var n = e.call(this) || this;
        return n.myGreets, n;
    }
    return __extends(t, e), t;
}(Greeter);