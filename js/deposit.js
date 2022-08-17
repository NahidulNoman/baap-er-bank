/* 
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
2-5. Convert string deposit amount to a number type
3. clear the deposit input field after getting the value
4. get the previous deposit total 
5. calculate new deposit total and set the value to the deposit total
6. get current balance total
7. calculate the new balance and set it to the balance total element
*/

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