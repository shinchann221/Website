 var messagesRef = firebase.database().ref('Website-ContactUs');

  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var phone = getInputVal('phnumber');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, subject, email, phone, message);
  
    // Clear form
    clearForm();
  }

  function clearForm(){
      document.getElementById('name').value = "";
      document.getElementById('subject').value = "";
      document.getElementById('email').value = "";
      document.getElementById('phnumber').value = "";
      document.getElementById('message').value = "";
  }
  
  // Save message to firebase
  function saveMessage(name, subject, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      subject:subject,
      email:email,
      phone:phone,
      message:message
    });
  }

    // Function to get get form values
    function getInputVal(id){
      return document.getElementById(id).value;
    }