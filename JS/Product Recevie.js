// Get modal and buttons
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

// Open modal when button is clicked
openModalButton.onclick = function() {
    modal.style.display = "flex";
}

// Close modal when close button is clicked
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Close modal if user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

