// 1. Theme Toggle (JavaScript Logic)
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";
});

// 2. Form Validation and Data Handling (User Data requirement)
const userForm = document.getElementById('userForm');
const feedback = document.getElementById('jsFeedback');

userForm.addEventListener('submit', function(event) {
    const name = document.getElementById('userName').value;
    
    // Simple JS interaction before PHP takes over
    if (name.length < 2) {
        event.preventDefault(); // Stop form if name is too short
        feedback.innerHTML = "<p style='color:red;'>Error: Please enter a real name.</p>";
    } else {
        // Log to console to show JS is working
        console.log("Form data submitted for: " + name);
    }
});