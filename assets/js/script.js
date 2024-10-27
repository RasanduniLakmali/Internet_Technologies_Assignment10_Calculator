const displayArea = document.getElementById("displayArea");

function displayValue(input){
    displayArea.value += input;
}

function calculate(){
   displayArea.value = eval(displayArea.value);
}

function clearDisplay(){
       displayArea.value = "";
}

function deleteValue(){
    displayArea.value = displayArea.value.toString().slice(0,-1);
}