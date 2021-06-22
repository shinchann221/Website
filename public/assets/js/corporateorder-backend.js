var messagesRef = firebase.database().ref('Website-Corporate-Order');

// Listen for form submit
document.getElementById('CorporateForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phnumber');
  var location = getInputVal('location');

  // Save message
  saveMessage(name, company, email, phone, location);

  // Clear form
  clearForm();
}

function clearForm(){
    document.getElementById('name').value = "";
    document.getElementById('company').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phnumber').value = "";
    document.getElementById('location').value = "";
}

// Save message to firebase
function saveMessage(name, subject, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    location:location
  });
}

  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }