var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
alert("Hello World");
var Animals = (function () {
    function Animals() {
    }
    Animals.prototype.canEat = function (food) {
        return "I'm eating.." + food;
    };
    return Animals;
}());
var Mammals = (function (_super) {
    __extends(Mammals, _super);
    function Mammals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mammals;
}(Animals));
var btn = document.getElementById("mybutton");
var lbl = document.getElementById('label');
btn.addEventListener('click', function (evt) {
    lbl.textContent = "Hi";
}, false);
var myTextField = document.getElementById("txt");
myTextField.addEventListener("input", function (evt) {
    lbl.textContent = myTextField.value;
}, false);
//# sourceMappingURL=script.js.map