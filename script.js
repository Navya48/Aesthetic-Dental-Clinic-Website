// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fa fa-times"></i>'
    : '<i class="fa fa-bars"></i>';
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navLinks.classList.remove("active");
    menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
  });
});

// ===== FAQ Accordion =====
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");

    // Close other FAQs
    document.querySelectorAll(".faq-item").forEach(item => {
      if (item !== faqItem && item.classList.contains("active")) {
        item.classList.remove("active");
        item.querySelector(".faq-answer").style.display = "none";
      }
    });

    // Toggle answer
    const answer = question.nextElementSibling;
    answer.style.display = faqItem.classList.contains("active") ? "block" : "none";
  });
});

// ===== Appointment Form =====
document.getElementById("appointment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'TEMPLATE_APPOINTMENT', this)
    .then(() => {
      alert("✅ Thank you! Your appointment request has been received. We’ll contact you shortly.");
      this.reset();
    }, (err) => {
      alert("❌ Failed to send. Please try again later.");
      console.error(err);
    });
});

// ===== Contact Form =====
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'TEMPLATE_CONTACT', this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, (err) => {
      alert("❌ Failed to send. Please try again later.");
      console.error(err);
    });
});

// ===== Scroll Events =====
const whatsappBtn = document.querySelector(".whatsapp-btn");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  whatsappBtn.style.transform = scrollY > 300 ? "scale(1)" : "scale(0)";
  header.classList.toggle("sticky", scrollY > 0);
});
