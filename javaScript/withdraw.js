 // Withdraw
        // step 1
        document.getElementById('withdraw-button').addEventListener('click', function(){
            // step 2
            const withdrawField = document.getElementById('withdraw-field');
            const withdrawAmountString = withdrawField.value;
            const withdrawAmount = parseFloat(withdrawAmountString);

            if(isNaN(withdrawAmount)){
                alert('Select an amount');
                return;
            }
            // step 3
            const withdrawOld = document.getElementById('withdraw-old');
            const withdrawElementString = withdrawOld.innerText;
            const withdrawElement = parseFloat(withdrawElementString);
            // step 4
            const newWithdrawElement = withdrawAmount + withdrawElement;
            // withdrawOld.innerText = newWithdrawElement;
            // step 5
            const oldBalance = document.getElementById('old-balance');
            const totalOldBalanceString = oldBalance.innerText;
            const totalOldBalance = parseFloat(totalOldBalanceString);

            const newBalanceTotal = totalOldBalance - withdrawAmount;
            // oldBalance.innerText = newBalanceTotal;
            
            if(totalOldBalance >= withdrawAmount){
                withdrawOld.innerText = newWithdrawElement;
                oldBalance.innerText = newBalanceTotal;
            }
            
            else{
                alert('Insufficient Balance');
            }
            

            withdrawField.value = '';
        })