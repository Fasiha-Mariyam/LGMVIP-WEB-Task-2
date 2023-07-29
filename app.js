function getInput(InputValue){

   document.getElementById("showInput").value += InputValue;

}

function getOutput(){

   let screenValue = document.getElementById("showInput").value;
   document.getElementById("showInput").value = eval(screenValue);

}
 
function clearScreen(){

    document.getElementById("showInput").value = "";

}

function deleteNum(){

    var screenValue = document.getElementById("showInput").value;
    document.getElementById("showInput").value = document.getElementById("showInput").value.slice(0,screenValue.length-1);  
}