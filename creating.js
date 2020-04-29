const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a Pizza';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);

// How to add it to the DOM

document.body.appendChild(myParagraph);
document.body.appendChild(myImage);

const list = document.createElement('ul');
const listList1 = document.createElement('li');
const listList2 = document.createElement('li');
const listList3 = document.createElement('li');
const listList4 = document.createElement('li');
const listList5 = document.createElement('li');

listList3.textContent = 'three';
listList1.textContent = 'One';
listList5.textContent = 'five';
listList2.textContent = 'two';
listList4.textContent = 'four';

list.insertAdjacentElement('afterbegin', listList3);
listList3.insertAdjacentElement('beforebegin', listList1);
list.insertAdjacentElement('beforeend', listList5);
listList1.insertAdjacentElement('afterend', listList2);
listList3.insertAdjacentElement('afterend', listList4);

document.body.appendChild(list);
