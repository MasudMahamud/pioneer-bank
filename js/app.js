//login button event handler
const loginBtn = document.getElementById("logIn");
loginBtn.addEventListener("click",function(){
    const submitArea = document.getElementById("submit-area");
    submitArea.style.display = 'none';

    const userAmount = document.getElementById("user-amount");
    userAmount.style.display = "block";
    
})

// deposit button event handler
document.getElementById("deposit-btn").addEventListener("click",function(){     

    const depositNumber = getInput("depositAmount");
    updateSpan("currentBalance",  depositNumber);
    updateSpan("totalBalance",  depositNumber);
    
    document.getElementById("depositAmount").value ="";
})


// withdraw button event handler
    document.getElementById("withdraw-btn").addEventListener("click", function(){

    const withdrawNumber = getInput("withdraw-amount");
    updateSpan("currentWithdraw",  withdrawNumber);
    updateSpan("totalBalance", -1* withdrawNumber);

    document.getElementById("withdraw-amount").value="";
})

function getInput (id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpan(id, depositNumber){
    const totalBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(totalBalance);
    const totalBalanceAmount =  depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalanceAmount;
}