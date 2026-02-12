import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  // We define them INSIDE the listener to ensure the HTML is loaded first
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // This "if" check prevents the "is not defined" or "null" errors
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", !isHidden);

      // Debugging: This will show in your console to prove it's working
      console.log("Menu is now " + (isHidden ? "hidden" : "visible"));
    });
  } else {
    console.warn("Could not find the menu or button IDs in the DOM.");
  }
});
