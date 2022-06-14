var messagesRef = firebase.database().ref('Website-NT-Kisan');

// Listen for form submit
document.getElementById('submit-btn').onclick(submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var phnumber = getInputVal('phnumber-nt-kisan');

  // Save message
  saveMessage(phnumber);

  // Clear form
  clearForm();
}

function clearForm(){
    document.getElementById('phnumber-nt-kisan').value = "";
}

// Save message to firebase
function saveMessage(phnumber){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    phnumber: phnumber,
  });
}

  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }