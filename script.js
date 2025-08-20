// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('#drawer');
if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    drawer.hidden = expanded;
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.hidden = true;
  }));
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length > 1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Demo-only form feedback
const fakeBtn = document.getElementById('fake-submit');
const formMsg = document.getElementById('form-msg');
if (fakeBtn && formMsg) {
  fakeBtn.addEventListener('click', ()=>{
    formMsg.hidden = false;
    setTimeout(()=> formMsg.hidden = true, 3000);
  });
}
