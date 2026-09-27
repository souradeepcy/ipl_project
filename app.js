// ==========================================
// Toast Notification Function
// ==========================================

function showToast(message) {
    const toast = document.createElement("div");

    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.backgroundColor = "#071952";
    toast.style.color = "white";
    toast.style.padding = "15px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    toast.style.zIndex = "2000";
    toast.style.fontWeight = "bold";

    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(function () {
        toast.remove();
    }, 3000);
}


// ==========================================
// Smooth Scrolling for Book Buttons
// ==========================================

const bookButtons = document.querySelectorAll('a[href="#booking"]');

bookButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        // Prevent normal jump
        event.preventDefault();

        // Find booking section
        const bookingSection = document.querySelector("#booking");

        // Smoothly scroll to booking section
        bookingSection.scrollIntoView({
            behavior: "smooth"
        });

        // Display confirmation toast
        showToast("Opening the ticket booking form...");
    });
});