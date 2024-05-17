let dateOfBirth = document.querySelector("#dob");
let luckyNumber = document.querySelector("#lucky-number");
let button = document.querySelector("#button");
let errorMessage = document.querySelector("#error-msg");

function compareValues(sum,luckyNumber){

    if(sum % luckyNumber.value == 0){
        errorMessage.innerText = "Your Birthdate is Lucky!"
    }else{
        errorMessage.innerText = "Your Birthdate is not lucky!!"
    }
}
function checkDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSumOfDate(dob);      
    
    if(sum && luckyNumber.value){
        compareValues(sum,luckyNumber);
    }else{
        errorMessage.innerText = "Both fields are required"
    }    
}

function calculateSumOfDate(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum+Number(dob.charAt(i));
    }
    return sum;
}
button.addEventListener("click",checkDateIsLucky);