// Get references to the menu toggle button, close button, and mobile menu
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

// Function to open the mobile menu
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  menuToggle.classList.add("hidden"); // Hide the menu toggle button
});

// Function to close the mobile menu
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  menuToggle.classList.remove("hidden"); // Show the menu toggle button
});
