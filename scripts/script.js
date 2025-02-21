console.log("Payment script loaded");

// Example: Copy GCash number on click
document.addEventListener("DOMContentLoaded", function () {
    let gcashNumber = document.getElementById("gcash-number");

    gcashNumber.addEventListener("click", function () {
        navigator.clipboard.writeText(gcashNumber.textContent)
            .then(() => alert("GCash number copied!"))
            .catch(err => console.error("Error copying: ", err));
    });
});
