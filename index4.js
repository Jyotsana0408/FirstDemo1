// traversing the dom //
 var itemList = document.querySelector('#items');

//ParentNode//
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement//
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode.parentNode);

// childNode //
// console.log(itemList.childNodes); //Useless Thing//

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild   //Useless Thing//
// console.log(itemList.firstChild);   //Useless Thing//

// FirstElementChild 
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent ='hello';

// lastChild   //Useless Thing//
// console.log(itemList.lastChild);   //Useless Thing//

// lastElementChild 
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent ='hello';

// nextSibling 
//console.log(itemList.nextSibling);
//nextElementSibling 
//console.log(itemList.nextElementSibling);

// previousSibling 
// console.log(itemList.previousSibling);
// previousElementSibling 
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color ='red';

// creatELement 

//creat a div
var newDiv = document.createElement('div');
//add Class
 newDiv.className ='hello';

//add id 
 newDiv.id ='hello1';

//add Attribute
 newDiv.setAttribute('title', 'hello Div');

//creat textNode
var newtextNode = document.createTextNode("Hello World");

//Add text 
newDiv.appendChild(newtextNode);

 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');

 console.log(newDiv);

 newDiv.style.fontSize = '30px';
 container.insertBefore(newDiv , h1);