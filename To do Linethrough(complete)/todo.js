let addToDoButton = document.getElementById('addToDo'); // Creating a variable with the name we want to give it "addToDoButton" then type in the ID we gave our button
let toDoContainer = document.getElementById('toDoContainer'); 
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){ // We can add an Event Listener to our button/. 
    var paragraph = document.createElement('p'); // Makes a <p> element
    paragraph.classList.add('paragraph-styling'); // Add the styling from CSS

    paragraph.innerText = inputField.value; // This will set the paragraph inner text to the value of the input field
    toDoContainer.appendChild(paragraph); // This will append the child to the paragraph
    
    inputField.value = ""; // This will clear the input field once it's been added
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"; // On one click it will show the text as line through
    })
    paragraph.addEventListener('dblclick', function(){ // On two clicks it will remove the child
        toDoContainer.removeChild(paragraph);
    })
})