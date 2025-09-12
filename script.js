// --- CARRUSEL ---
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  showSlide(currentSlide);
}

setInterval(() => {
  changeSlide(1);
}, 5000);

// --- FORMULARIO ---
function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto a ${email}.`);
  event.target.reset();
}

// Si quieres que los botones filtren productos visibles según categoría
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.getAttribute('data-cat');
    filterByCategory(cat);
  });
});

function filterByCategory(category) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    // aquí se asume que cada tarjeta tiene una clase con su categoría, por ejemplo `.collares`, `.pulseras`, etc.
    if (card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

