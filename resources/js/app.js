//THINGS TO COMPLETE


//fix list generation
// add list sections with CSS
//add remove button functionality
//make code for done verify work for delete button 


//****** = items affecting current task




var addButton = document.getElementById("add-item");
var doneButton = document.body.querySelectorAll(".check");
var checkButtons = document.getElementById("check");

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
 verifyCheckButton();

 console.log(doneButton);
}

//add item to array
function addItem(text) {
    var newItem = text;
    toDoListArr.unshift(newItem);
    console.log(toDoListArr);
}

function activateButtons(className) {
    var test = "'" + "'";
    for (var i = 0; i < className.length; i++) {
        className[i].addEventListener('click', processCheck, false);
    }
};

//****
function verifyCheckButton() {
    var doneButton = document.getElementsByClassName("check");
    var todoList = document.getElementById("in-prog");
 
    if (doneButton) {
        activateButtons(doneButton);
        console.log("click button!")
    } else {
        console.log("no click button!")
    };

    var classname = document.getElementsByClassName("classname");

        var myFunction = function() {
            var attribute = this.getAttribute("data-myattribute");
            alert(attribute);
        };

        for (var i = 0; i < classname.length; i++) {
            classname[i].addEventListener('click', myFunction, false);
        }
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

var checkButtons = document.getElementById("check");

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
//variables
 var toDoList = document.getElementById("in-prog");   
 var taskName = this.parentElement.parentElement.innerText;
 var arrValue = searchStringInArray(taskName, toDoListArr);

 //pull info from to-do and add to done list
 toDoListArr.splice(arrValue, 1);
 doneItemsArr.unshift(taskName);
 toDoList.innerHTML = "";
 toDoListArr.forEach(createItem);
 verifyCheckButton();

 console.log(doneItemsArr);
 doneItemsArr.forEach(createItem);

}

//event listener
addButton.addEventListener("click", processClick);

