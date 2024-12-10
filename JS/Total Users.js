// JavaScript to add interactivity to the table rows

document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".user-table tbody tr");

    rows.forEach(row => {
        row.addEventListener("click", function () {
            alert("You clicked on " + this.cells[0].textContent.trim());
        });
    });
});
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none'; // Hides the modal
}
