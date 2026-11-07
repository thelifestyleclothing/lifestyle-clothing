// Config: change here, not in the HTML
const WHATSAPP = '919312180193';

document.documentElement.classList.add('js');

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// "Ask for price" -> WhatsApp with category prefilled
document.querySelectorAll('.card').forEach(card => {
  const link = card.querySelector('.ask');
  const cat = card.dataset.cat;
  const msg = encodeURIComponent(`Hi Lifestyle, I'm interested in ${cat}. Can you share what's available and the prices?`);
  link.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

// Scroll reveal
const targets = document.querySelectorAll('.card, .features > div, .gallery img, .visit > div');
targets.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  targets.forEach(el => io.observe(el));
} else {
  targets.forEach(el => el.classList.add('in'));
}

document.getElementById('year').textContent = new Date().getFullYear();
