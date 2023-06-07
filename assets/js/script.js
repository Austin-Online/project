// Get the form element
var form = document.getElementById("form");
var firstNameEl = document.querySelector("#first-name");
var lastNameEl = document.querySelector("#last-name");
var emailEl = document.querySelector("#email");
var passwordEl = document.querySelector("#password");
var ulEl = document.querySelector("#names");

var firstNameDisplay = document.createElement("li");
var lastNameDisplay = document.createElement("li");

function handleFormSubmit(event) {
  event.preventDefault();

  // Get the input values
  var firstName = firstNameEl.value;
  console.log("firstName: " + firstName);

  var lastName = lastNameEl.value;
  console.log("lastName: " + lastName);

  var email = emailEl.value;
  console.log("email: " + email);

  var password = passwordEl.value;
  console.log("password: " + password);

  firstNameDisplay.textContent = firstName;
  ulEl.appendChild(firstNameDisplay);

  lastNameDisplay.textContent = lastName;
  ulEl.appendChild(lastNameDisplay);

  // Log the input values to the console
};

form.addEventListener("submit", handleFormSubmit)
