//THINGS TO COMPLETE
//add remove button functionality 

//add done check button functionality

//****** = items affecting current task




var button = document.getElementById("add-item");
var doneButton = document.body.querySelectorAll(".check");

//button icons
var checkIcon = '<i id="check" class="fas fa-check-circle fa-2x"></i>';
var removeIcon = '<i id="remove" class="far fa-trash-alt fa-2x"></i>';

//arrays
var toDoListArr = ["test"]
var doneItemsArr = []

//button click
//when button is clicked pull input value and create to-do list item
function processClick() {
    var value = document.getElementById("item").value;
    var input = document.getElementById("item");
    var toDoList = document.getElementById("in-prog");
    var doneList = document.getElementById("done")
    
    if (value) {
        toDoList.innerHTML = ""
        addItem(value);
        toDoListArr.forEach(createItem);
    }

 input.value = "";
 console.log(doneButton);
}

//add item to array
function addItem(text) {
    var newItem = text;
    toDoListArr.unshift(newItem);
    console.log(toDoListArr);
}

//****
function verifyCheckButton(doneButton) {
    var doneButton = document.body.querySelectorAll(".check");
    if (document.body.contains("#check")) {
        doneButton.addEventListener("click", processCheck);
        console.log("click button!")
    } else {
        console.log("no click button!")
    };
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

//******
function searchStringInArray (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str)) return j;
    }
    return -1;
    
}

//****** 
//when check button is clicked item moves to done list
function processCheck() {
 console.log("clicked!")
}

//event listener
button.addEventListener("click", processClick);
verifyCheckButton();


console.log(searchStringInArray("test", toDoListArr));
