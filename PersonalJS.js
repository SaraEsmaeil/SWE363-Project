// Get modal elements
var editModal = document.getElementById("editModal");
var verifyModal = document.getElementById("verifyModal");

// Get buttons
var settingsButton = document.getElementById("settingsButton");
var closeEditModal = document.getElementById("closeEditModal");
var closeVerifyModal = document.getElementById("closeVerifyModal");

// Open the Edit Profile modal
settingsButton.onclick = function() {
    editModal.style.display = "block";
}

// Close the Edit Profile modal
closeEditModal.onclick = function() {
    editModal.style.display = "none";
}

// Close the Phone Verification modal
closeVerifyModal.onclick = function() {
    verifyModal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == editModal) {
        editModal.style.display = "none";
    } else if (event.target == verifyModal) {
        verifyModal.style.display = "none";
    }
}

// Handle form submission for Edit Profile
document.getElementById("editForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Here you would typically handle the form data (e.g., send it to a server)
    // Then, open the verification modal
    editModal.style.display = "none"; // Close the edit modal
    verifyModal.style.display = "block"; // Open the verification modal
    startTimer(); // Start the timer when the verification modal opens
}

// Function to start the timer
function startTimer() {
    var timerDisplay = document.getElementById("timer");
    var timeLeft = 60; // 60 seconds
    var timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDisplay.innerHTML = "Time's up!";
        } else {
            timerDisplay.innerHTML = Math.floor(timeLeft / 60) + ":" + (timeLeft % 60 < 10 ? "0" : "") + (timeLeft % 60);
            timeLeft--;
        }
    }, 1000);
}
