// 1. Display Current Date in Footer
document.getElementById('currentDate').innerText = new Date().toLocaleDateString();

// 2. Theme Toggle Logic (Visual Coding)
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 3. User Data Processing (Requirement 4)
function processData() {
    const input = document.getElementById('userInput');
    const list = document.getElementById('dataList');
    
    if (input.value.trim() !== "") {
        // Create a new list item based on keyboard input
        const newItem = document.createElement('li');
        newItem.textContent = input.value;
        
        // Add to the list
        list.appendChild(newItem);
        
        // Clear input
        input.value = "";
    } else {
        alert("Please type a project idea first!");
    }
}
