// Open the modal
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};
