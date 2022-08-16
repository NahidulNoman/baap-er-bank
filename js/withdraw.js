document.getElementById('btn-withdraw').addEventListener('click',function(){
    let withdraw = document.getElementById('please-withdraw');
    let doWithdrawString = withdraw.value;
    let finalWithdraw = parseFloat(doWithdrawString);
    withdraw.value = '';

    if(isNaN(finalWithdraw)){
        alert('Please enter a valid number')
        return;
    }
  
    let getWithdraw = document.getElementById('withdraw');
    let getWithdrawString = getWithdraw.innerText;
    let getFinalWithdraw = parseFloat(getWithdrawString);

    let totalWithdraw = finalWithdraw + getFinalWithdraw;
    getWithdraw.innerText = totalWithdraw;

    // if(withdraw > totalBalanceWithdraw){
    //     alert('Baap er Bank e eto taka nai!!');
    //     return;
    // }

    let totalBalanceWithdraw = document.getElementById('balance');
    let getBalanceWithdrawString = totalBalanceWithdraw.innerText;
    let getBalanceWithdrawFloat = parseFloat(getBalanceWithdrawString);

    let total = getBalanceWithdrawFloat - finalWithdraw;
    totalBalanceWithdraw.innerText = total;
    
    

   
})