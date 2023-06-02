document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Validate form fields
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Form submission successful
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');
  
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
  