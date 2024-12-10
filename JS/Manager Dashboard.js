function postAnnouncement() {
    const title = document.getElementById("announcementTitle").value;
    const content = document.getElementById("announcementContent").value;

    if (title && content) {
        alert(`Announcement Posted:\nTitle: ${title}\nContent: ${content}`);
        document.getElementById("announcementTitle").value = "";
        document.getElementById("announcementContent").value = "";
    } else {
        alert("Please enter both title and content for the announcement.");
    }
}
// Add event listeners to the View All buttons
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".view-all-button").forEach(function(button) {
        button.addEventListener("click", function() {
            const cardTitle = this.parentElement.querySelector(".summary-title").textContent;

            if (cardTitle === "Active Loans") {
                alert("Displaying details for Active Loans...");
            } else if (cardTitle === "Total Active Listings") {
                alert("Displaying details for Active Listings...");
            } else if (cardTitle === "Total Users") {
                alert("Displaying details for Total Users...");
            } else {
                alert("Unknown section");
            }
        });
    });
});
// New logic for the "Open" button in Customer Support
document.querySelectorAll(".support-ticket .btn-secondary").forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Opening support ticket...");
    });
});