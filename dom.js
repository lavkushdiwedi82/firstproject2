// var items = document.getElementsByClassName('list-group-item'
// );
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// //3rd element bcg green
// var items = document.getElementsByClassName('list-group-item'
// );
// console.log(items);
// console.log(items[3]);
// items[3].textContent = 'hello 2';
// items[3].style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'green';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontColor = 'bold';
// }


// query selector all
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');


// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }


// Traverse the Dom
var itemList = document.querySelector('#items');

// paren Node

// console.log(itemList.parentNode);
// ItemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.children);
// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = 'yellow';

//firstchild



//firstElementchild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lastElementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1';

//Nex Sibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);

//previousElementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//create a div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

// add ID
newDiv.id = 'hello 1';

// add attr
newDiv.setAttribute('title', 'Hello Div');

//create textode
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);