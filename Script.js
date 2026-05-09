// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ================= CLOSE MENU ON CLICK =================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

});

// ================= NAVBAR BACKGROUND ON SCROLL =================

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {

    navbar.style.background = "#0b3d91";
    navbar.style.transition = "0.4s";

  } else {

    navbar.style.background = "rgba(0,0,0,0.3)";

  }

});

// ================= BOOKING FORM =================

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Booking Confirmed Successfully!");

  bookingForm.reset();

});

// ================= BUTTON ANIMATION =================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.05)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

  });

});