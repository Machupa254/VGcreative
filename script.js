// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Initialize Slider
showSlide(currentSlide);

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
});
function sendWhatsAppOrder() {
  const service = document.getElementById('serviceSelect').value;
  if (!service) {
    alert("Please select a service first.");
    return;
  }

  const phoneNumber = "254727519292"; // Replace with your WhatsApp number (no + or 0)
  const message = `Hello VG Creative, I would like to book the following service: ${service}`;
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${0727519292}?text=${encodedMessage}`;

  window.open(waLink, '_blank');
}