//THINGS TO COMPLETE




// edit list sections with CSS

var addButton = document.getElementById("add-item");
var doneButton = document.body.querySelectorAll(".check");
var checkButtons = document.getElementById("check");

//button icons
var checkIcon = '<i id="check" class="fas fa-check-circle fa-2x"></i>';
var removeIcon = '<i id="remove" class="far fa-trash-alt fa-2x"></i>';

//arrays
var toDoListArr = []
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

//activate buttons
function activateButtons(className, isDone) {

    if (isDone === "trash") {
       
        for (var i = 0; i < className.length; i++) {
            className[i].addEventListener('click', processTrash, false);
        }
        
    } else if (isDone) {
        for (var i = 0; i < className.length; i++) {
            className[i].addEventListener('click', processCheck, false);
        }
    } else {
        for (var i = 0; i < className.length; i++) {
            className[i].addEventListener('click', processUncheck, false);
        }
    }

};

//check for and activate buttons
function verifyCheckButton() {
    var doneButton = document.getElementsByClassName("check");
    var uncheckButton = document.getElementsByClassName("uncheck");
    var trashButton = document.getElementsByClassName("remove");
    var todoList = document.getElementById("in-prog");
 
    //activate check buttons
    if (doneButton && uncheckButton) {
        activateButtons(doneButton, true);
        activateButtons(uncheckButton, false);
        activateButtons(trashButton, "trash");
    } else if (doneButton){
        activateButtons(doneButton, true);
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

//creates done list 
function createDoneItem(text) {

    var list = document.getElementById('done');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    var check = document.createElement('button');
    check.classList.add('uncheck')
    check.innerHTML = checkIcon;

    buttons.appendChild(remove);
    buttons.appendChild(check);
    item.appendChild(buttons);

    list.appendChild(item);

}

var checkButtons = document.getElementById("check");

//pull specific string from array
function searchStringInArray (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str)) return j;
    }
    return -1;
    
}



//when check button is clicked item moves to done list
function processCheck() {
//variables
 var toDoList = document.getElementById("in-prog"); 
 var doneList = document.getElementById("done");  
 var taskName = this.parentElement.parentElement.innerText;
 var arrValue = searchStringInArray(taskName, toDoListArr);

 //pull info from to-do and add to done list
 toDoListArr.splice(arrValue, 1);
 doneItemsArr.push(taskName);
 toDoList.innerHTML = "";
 toDoListArr.forEach(createItem);
 

 console.log(doneItemsArr);
 doneList.innerHTML = "";
 doneItemsArr.forEach(createDoneItem);

 verifyCheckButton();

}

//when button is clicked move to to-do list
function processUncheck() {
    var toDoList = document.getElementById("in-prog"); 
    var doneList = document.getElementById("done");  
    var taskName = this.parentElement.parentElement.innerText;
    var arrValue = searchStringInArray(taskName, doneItemsArr);
   
    //pull info from to-do and add to done list
    doneItemsArr.splice(arrValue, 1);
    toDoListArr.push(taskName);
    toDoList.innerHTML = "";
    toDoListArr.forEach(createItem);
    
    doneList.innerHTML = "";
    doneItemsArr.forEach(createDoneItem);
   
    verifyCheckButton();
}

function processTrash() {
    var toDoList = document.getElementById("in-prog"); 
    var doneList = document.getElementById("done"); 
    var listName = this.parentElement.parentElement.parentElement.id;
    var taskName = this.parentElement.parentElement.innerText;
    

    if (listName === "in-prog") {
        var arrValue = searchStringInArray(taskName, toDoListArr);
        toDoListArr.splice(arrValue, 1);

        toDoList.innerHTML = "";
        toDoListArr.forEach(createItem);
        verifyCheckButton();
        console.log(toDoListArr);
    } else {
        var arrValue = searchStringInArray(taskName, doneItemsArr);
        doneItemsArr.splice(arrValue, 1);
        doneList.innerHTML = "";
        doneItemsArr.forEach(createDoneItem);
        verifyCheckButton();
        console.log(doneItemsArr);
    }

    console.log(listName);
}

//event listener
addButton.addEventListener("click", processClick);

