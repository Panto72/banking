const login = document.getElementById("login")

login.addEventListener('click', function(){
    const transaction = document.getElementById('transaction-area')
    const login_area = document.getElementById('login-area')
    
    login_area.style.display = 'none'
    transaction.style.display = 'block'
})

// const addDeposit = document.getElementById("addDeposit")
// addDeposit.addEventListener('click', function(){
//     const depositAmount = document.getElementById("depositAmount")
//     const currentDeposit = document.getElementById("currentDeposit")
//     const currentBalance = document.getElementById("currentBalance")
//     const totaldiposite = Number(depositAmount.value)+ Number(currentDeposit.innerText)
//     const totalbalance = Number(depositAmount.value)+ Number(currentBalance.innerText)

//     currentDeposit.innerText = totaldiposite
//     currentBalance.innerText = totalbalance

// })

// const addWithdraw = document.getElementById("addWithdraw")
// addWithdraw.addEventListener('click', function(){
//     const withdrawAmount = document.getElementById("withdrawAmount")
//     const currentWithdraw = document.getElementById("currentWithdraw")
//     const currentBalance = document.getElementById("currentBalance")
//     const totalwithdraw = Number(withdrawAmount.value)+ Number(currentWithdraw.innerText)
//     const totalbalance =  Number(currentBalance.innerText) - Number(withdrawAmount.value)

//     currentWithdraw.innerText = totalwithdraw
//     currentBalance.innerText = totalbalance

// })

function UpdateBalance(action, amount, currentamount , balance){
    const Amount=document.getElementById(amount);
    const Currentamount = document.getElementById(currentamount);
    const Balance = document.getElementById(balance);

    const transactionAmount = Number(Amount.value);


    if(action === 'diposite'){
        const newamount = Number(Currentamount.innerText) + transactionAmount
        const newbalance = Number(Balance.innerText) + transactionAmount

        Currentamount.innerText=newamount;
        Balance.innerText = newbalance;
        Amount.value ="";
    }

    else if(action ==="withdraw" && transactionAmount<= Number(Balance.innerText)){
        const newamount = Number(Currentamount.innerText) + transactionAmount 
        const newbalance = Number(Balance.innerText) - transactionAmount

        Currentamount.innerText=newamount;
        Balance.innerText = newbalance;
        Amount.value ="";
    }

    else{alert("insufficient balance")}
    
}

const addDeposit = document.getElementById("addDeposit")
addDeposit.addEventListener('click', function(){
    UpdateBalance('diposite','depositAmount','currentDeposit','currentBalance');
})

const addWithdraw = document.getElementById("addWithdraw")
addWithdraw.addEventListener('click', function(){
    UpdateBalance('withdraw','withdrawAmount','currentWithdraw','currentBalance');
})