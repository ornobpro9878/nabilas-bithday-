let currentSlide = 1;
const totalSlides = 6;

function showSlide(slideNumber) {
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('active');
  });
  document.getElementById(`slide${slideNumber}`).classList.add('active');
}

document.getElementById('yesBtn').addEventListener('click', () => {
  currentSlide = 4;
  showSlide(currentSlide);
});

document.getElementById('noBtn').addEventListener('click', () => {
  currentSlide = 3;
  showSlide(currentSlide);
});

document.getElementById('clickHereBtn').addEventListener('click', () => {
  currentSlide = 5;
  showSlide(currentSlide);
});

// Automatically move to the next slide after a delay
setInterval(() => {
  currentSlide = (currentSlide % totalSlides) + 1;
  showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds
