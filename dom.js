var items = document.getElementsByClassName('list-group-item'
);
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//3rd element bcg green
var items = document.getElementsByClassName('list-group-item'
);
console.log(items);
console.log(items[3]);
items[3].textContent = 'hello 2';
items[3].style.fontWeight = 'bold';
items[3].style.backgroundColor = 'green';

for(var i=0;i<items.length;i++){
    items[i].style.fontColor = 'bold';
}