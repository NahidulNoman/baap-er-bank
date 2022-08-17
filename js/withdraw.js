/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/


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

    

  
    let totalBalanceWithdraw = document.getElementById('balance');
    let getBalanceWithdrawString = totalBalanceWithdraw.innerText;
    let getBalanceWithdrawFloat = parseFloat(getBalanceWithdrawString);
    console.log(finalWithdraw,totalBalanceWithdraw)

    if(finalWithdraw > getBalanceWithdrawFloat){
        alert('Baap er Bank e eto taka nai!!');
        return;
    }
    else{
        let totalWithdraw = finalWithdraw + getFinalWithdraw;
        getWithdraw.innerText = totalWithdraw;
    }

    let total = getBalanceWithdrawFloat - finalWithdraw;
    totalBalanceWithdraw.innerText = total;
    
    

   
})