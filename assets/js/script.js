// Get the form element
var form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  var firstName = document.querySelector('input[name="first-name"]').value;
  var lastName = document.querySelector('input[name="last-name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var password = document.querySelector('input[name="password"]').value;

  // Log the input values to the console
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Email:', email);
  console.log('Password:', password);
});
