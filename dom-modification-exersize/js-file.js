// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!!!';

container.appendChild(content);


const paragraph = document.createElement('p');
paragraph.textContent = "It's red!"
paragraph.style.color = 'red'
container.appendChild(paragraph)

const headerThree = document.createElement('h3');
headerThree.textContent = "It's blue!"
headerThree.style.color = 'blue'
container.appendChild(headerThree)

const containerDiv = document.createElement('div')
containerDiv.style.backgroundColor = 'pink';
containerDiv.style.borderColor = 'black';
containerDiv.style.borderStyle = 'solid';
container.appendChild(containerDiv);

const headerOne = document.createElement('h3');
headerOne.textContent = "This is in a div!";
containerDiv.appendChild(headerOne);

const anotherParagraph = document.createElement('p');
anotherParagraph.textContent = "This too!";
containerDiv.appendChild(anotherParagraph);