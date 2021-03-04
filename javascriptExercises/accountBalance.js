/*var balance = -5;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === true) {
  if (isActive === true && balance > 0) { console.log('Your balance is $' + balance + '.') } else {
    if (!isActive) { console.log('Your account is no longer active') } else {
      if (balance === 0) { console.log("Your account is empty.") } else { console.log('Your balance is negative. Please contact the bank') }
    }
  }
}


else { console.log('Thank you. Have a nice day!') }
*/

var balance = -5;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === true) {
  if (isActive === true && balance > 0) {
    console.log('Your balance is $' + balance + '.')
  }
  else if (!isActive) {
    console.log('Your account is no longer active')
  }
  else if (isActive === true && balance === 0) {
    console.log("Your account is empty.")
  }
  else if (isActive === true && balance < 0) {
    console.log('Your balance is negative. Please contact the bank')
  }
}

else { console.log('Thank you. Have a nice day!') }
