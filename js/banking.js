//  Using function
function getINputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  amountValue = parseFloat(inputAmountText);
  inputField.value = '';
  return amountValue;
}
function updateTotalField(totalField, amount) {
  const depositElement = document.getElementById(totalField);
  const totalText = depositElement.innerText;
  const previousTotal = parseFloat(totalText);
  depositElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  }
  else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

document.getElementById('deposite-button').addEventListener('click', function () {
  const depositAmount = getINputValue('deposite-input')
  if (depositAmount > 0) {
    updateTotalField('deposit-total', depositAmount)
    updateBalance(depositAmount, true)
  }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
  const withdrawAmount = getINputValue('withdraw-input')
  const currentBalance = getCurrentBalance()
  if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    updateTotalField('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false)
  }
  if(withdrawAmount > currentBalance){
    alert('you cannot withdraw more money than your balance');
  }
});
