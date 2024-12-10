// JavaScript function to handle adding a new category
function addCategory() {
    alert("Add Category functionality to be implemented.");
}


// Add event listener for the add category button
document.querySelector(".btn-add-category").addEventListener("click", addCategory);
// Function to display all reviews
function viewAllReviews() {
    alert("Displaying all reviews..."); // Replace this with actual display logic if needed
}

// Add event listener for "View All" button specifically for reviews
document.querySelectorAll(".view-all-button").forEach(function(button) {
    button.addEventListener("click", function() {
        const cardTitle = this.parentElement.querySelector(".summary-title").textContent;

        if (cardTitle === "Reviews") {
            viewAllReviews();
        } else {
            alert("Unknown section");
        }
    });
});
