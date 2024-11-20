// Basic form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
    } else {
        alert("Thank you for your message!");
        // You can add further code to handle form submission here, such as AJAX or sending data to a server.
    }
});
