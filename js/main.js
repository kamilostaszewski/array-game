let array = [];
let app = document.getElementById('app');


for (var i = 0; i < 100; i++) {
    array.push(i);
}

array.forEach(function(element, index) {
    let div = document.createElement('div');
    div.classList.add(index);

    app.appendChild(div);
});

console.log(array,app   )