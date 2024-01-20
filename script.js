const input = document.createElement('input');
const label = document.createElement('label');
const addBtn = document.createElement('button');

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
    document.body.append(addBtn);
    addBtn.textContent = 'Add';
}();