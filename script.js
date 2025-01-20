const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', ()=>{
  mainNav.classList.toggle('active');
  const spans = mobileMenuBtn.getElementsByTagName('span');
  spans[0].style.transform = mainNav.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : '';
  spans[1].style.opacity = mainNav.classList.contains('active') ? '0' : '1';
  spans[2].style.transform = mainNav.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : '';
});

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

function showSlide(n){
  slides.forEach(slide => slide.classList.remove('slideAktif'));
  slides[n].classList.add('slideAktif');
}

function nextSlide(){
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide(){
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector('.dropbtn');
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default navigation
    const dropdownContent = dropdown.querySelector('.dropdownKonten');
    dropdownContent.classList.toggle('active');
  });
});


let slideInterval = setInterval(nextSlide, 5000);

const slider = document.getElementById('imageSlider');
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide,5000));

nextBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
});

prevBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
});

const catagories = [
  { name: 'Pantai', count:12},
  { name: 'Gunung', count:8},
  { name: 'Budaya', count:15},
  { name: 'Kuliner', count:20},
  { name: 'Festival', count:6},
];

const katagoriList = document.getElementById('katagoriList');
li.addEventListener('click', () => {
  li.style.backgroundColor = 'var(--accent-color)';
  setTimeout(() => {
    li.style.backgroundColor = '';
  }, 200);
});

catagories.forEach(category => {
  const li = document.createElement('li');
  li.innerHTML = `${category.name} <span>(${category.count})<span>`;
  li.addEventListener('click', () => {
    // li.style.backgroundColor = var(--accent-color);
    setTimeout(() => {
      li.style.backgroundColor = '';
    }, 200);
  });
  katagoriList.appendChild(li);
});

function updateButtonState() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

prevBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
  updateButtonState();
});

nextBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
  updateButtonState();
});

updateButtonState();
