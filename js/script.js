document.getElementById('button').addEventListener('click', function(){
  // get email
  const emailField = document.getElementById('email');
  const userEmail = emailField.value;
  // get password
  const passwordField = document.getElementById('password');
  const userPassword = passwordField.value;
  if(userEmail == 'abdullah@gmail.com' && userPassword == 'secret'){
    const newLocal = 'banking.html';
   window.location.href = newLocal
  }
})
