function clear(){
    document.getElementById("dispaly").value = " ";
}

function displayvalue (numberOrOperator){
    document.getElementById("dispaly").value +=numberOrOperator;
}
function calculate(){
    var calculatedValue =document.getElementById("dispaly").value;
    var valueCalculated =eval(calculatedValue);
    document.getElementById("dispaly").value= valueCalculated;
}
function calculatePercent(){
    var calculatedValue =document.getElementById("dispaly").value;
    var valueCalculated =eval(calculatedValue);
    valueCalculated /=100;
    document.getElementById("dispaly").value= valueCalculated;
}