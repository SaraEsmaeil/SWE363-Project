// JavaScript for handling the star rating system
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll("#rating-stars .star");
    const ratingInput = document.getElementById("rating");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            const rating = star.getAttribute("data-value");
            ratingInput.value = rating;

            // Update the visual state of stars
            stars.forEach(s => s.classList.remove("selected"));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add("selected");
            }
        });
    });
});

function submitReview() {
    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("review-text").value;
    const uploadImage = document.getElementById("upload-image").files[0];

    if (rating === "0" || reviewText.trim() === "") {
        alert("Please provide a rating and write a review before submitting.");
    } else {
        alert(`Thank you for your review! You rated ${rating} star(s).`);
        document.getElementById("review-form").reset();
        document.getElementById("rating").value = "0";

        // Clear star selection
        const stars = document.querySelectorAll("#rating-stars .star");
        stars.forEach(star => star.classList.remove("selected"));
    }
}
