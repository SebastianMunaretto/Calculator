const displayField = document.getElementById("mainDisplay");
const calcButtons = document.getElementsByClassName("calcButton")
const equalsButton = document.getElementById("equalsButton");
const deleteButton = document.getElementById("deleteButton");
const displayHistory = document.getElementById("displayHistory");


/*
    Event listeners
*/

function getAddSignToDisplay(sign) {
    return function addSignToDisplay() {
        displayField.value += sign;
    }
}

// Events to add char in main display
for (button of calcButtons) {
    button.onclick = getAddSignToDisplay(button.getInnerHTML());
}

// Event to evaluate the result
equalsButton.onclick = function evaluateToDisplay() {

    try {
        const result = eval(displayField.value);
        displayField.value = result;
        displayHistory.innerHTML += result + " &#13";

    }
    catch {
        displayField.value = "Error!";
        displayHistory.innerHTML += "Error!  &#13";

    }

}

// Event to delete all values in display
deleteButton.onclick = function deleteValues() {
    displayField.value = "";
}












