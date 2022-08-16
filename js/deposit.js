document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositHere = document.getElementById('please-deposit');
    const doDeposit = depositHere.value;
    const finalDeposit = parseFloat(doDeposit);
    
    depositHere.value = '';
    
    if(isNaN(finalDeposit)){
        alert('Please enter a valid number')
        return;
    }

    const deposit = document.getElementById('deposit');
    const getDeposit = deposit.innerText;
    const finalGetDeposit = parseFloat(getDeposit);
    const totalDeposit = finalDeposit + finalGetDeposit;

    let getBalance = document.getElementById('balance');
    let getBalanceDeposit = getBalance.innerText;
    let finalBalance = parseFloat(getBalanceDeposit);
    
    let totalBalance = finalDeposit + finalBalance
    getBalance.innerText = totalBalance;

    deposit.innerText = totalDeposit;
})