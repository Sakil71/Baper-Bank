// Deposite
        // step 1
        document.getElementById('deposite-button').addEventListener('click', function(){
            // step 2
        const inputField = document.getElementById('input-field');
        const inputAmmountString = inputField.value;
        const inputAmmount = parseFloat(inputAmmountString);
            // step 3
        const ammountDollar = document.getElementById('ammount-dollar');
        const totalAmountString = ammountDollar.innerText;
        const totalAmount = parseFloat(totalAmountString);
            // step 4
        // const totalDepositeAmount = inputAmmount + totalAmount;
    
            // step 5
        const oldbalance = document.getElementById('old-balance');
        const totalOldBalanceString = oldbalance.innerText;
        const totalOldBalance = parseFloat(totalOldBalanceString);
    
            // step 6
        const newDepositeBalance = totalOldBalance + inputAmmount;
    
        if(inputAmmount > 0){
            // ammountDollar.innerText = totalDepositeAmount;
            ammountDollar.innerText = inputAmmount;
            oldbalance.innerText = newDepositeBalance;
        }
        else{
            alert('Please select an amount');
        }
        
        inputField.value = '';
    })