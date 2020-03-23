var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".folder");
var close = document.querySelector(".close");
var apply1 = document.querySelector('.apply');

btn.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("hidden");
});

popup.addEventListener("click", function(event) {
    e = event || window.event
    if (e.target == this) {
        popup.classList.add("hidden");
    }
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("hidden");
});



function a() {
    //создаём элемент (узел) li
    var elementLI = document.createElement("li");
    var form = document.querySelector('.order-form');
    var textValue = form.querySelector('.form-input');
//создаём текстовый узел, содержащий текст "Смартфон"
    var textSmart = document.createTextNode(textValue.value);
//добавляем созданный текстовый узел как последний дочерний элемент к только что созданному элементу LI
    elementLI.appendChild(textSmart);
//получаем элемент, к которому будет добавлен созданный узел li как дочерний
    var elementUL = document.getElementById("list");
//добавляем созданный элемент li как последний дочерний элемент к UL с id="list"
    elementUL.appendChild(elementLI);
    textValue.value='';
    popup.classList.add("hidden");
}



