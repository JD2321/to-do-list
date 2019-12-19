//THINGS TO COMPLETE
//add remove button functionality 
//add check button functionality
//add done check button functionality
//fix repeat items after each add





var button = document.getElementById("add-item");

//button icons
var checkIcon = '<i id="check" class="fas fa-check-circle fa-2x"></i>';
var removeIcon = '<i id="remove" class="far fa-trash-alt fa-2x"></i>';

//arrays
var todoItems = []
var doneItems = []

//button click
//when button is clicked pull input value and create to-do list item
function processClick() {
    var value = document.getElementById("item").value;
    var input = document.getElementById("item");
    
    if (value) {
        addItem(value);
        todoItems.forEach(createItem);
    }

 input.value = "";
}

//add item to array
function addItem(text) {
    var newItem = text;
    todoItems.unshift(newItem);
    console.log(todoItems);
}

// create new list item 
function createItem(text) {

    var list = document.getElementById('in-prog');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    var check = document.createElement('button');
    check.classList.add('check');
    check.innerHTML = checkIcon;

    buttons.appendChild(remove);
    buttons.appendChild(check);
    item.appendChild(buttons);

    list.appendChild(item);

}

//event listener
button.addEventListener("click", processClick);