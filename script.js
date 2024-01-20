const input = document.createElement('input');
const label = document.createElement('label');
const addBtn = document.createElement('button');
const list = document.createElement('ul');

createDOMElements();

//create the DOM elements
function createDOMElements() {
    
    const createHeader = function() {
        const header = document.createElement('h1');
        header.textContent = 'Shopping List';
        header.style.cssText = 'border: 2px black solid; text-align: center; padding: 20px; border-radius: 25px;'
        document.body.appendChild(header);
    }();
    
    const createInput = function() {
        document.body.appendChild(input);
        input.setAttribute('id', 'grocery');
    }();
    
    const createLabel = function() {
        document.body.insertBefore(label, input);
        label.setAttribute('for', 'grocery');
        label.textContent = 'Item to add to shopping cart:';
    }();
    
    const createButton = function() {
        document.body.appendChild(addBtn);
        addBtn.textContent = 'Add';
    }();

    const createList = function() {
        document.body.appendChild(list);
    }();
};

//pressing enter during input will trigger click event on add button
input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addBtn.click();
    }
});

//add button event
addBtn.addEventListener('click', () => { 

    //create a list to append cart item and delete
    const li = document.createElement('li');
    list.appendChild(li);

    //cart item
    const span = document.createElement('span');
    span.textContent = input.value;
    li.appendChild(span);

    //delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'delete';
    li.appendChild(delBtn);

    //clicking the delete button remove the parent node
    delBtn.addEventListener('click', (e) => {
        console.log(e);
        e.target.parentNode.remove();
    })    

    //clear the input field and focus
    input.value = '';
    input.focus();
})