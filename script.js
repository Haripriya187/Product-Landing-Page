document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const newsletterForm = document.querySelector('.newsletter form');
newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = newsletterForm.querySelector('input[type="email"]').value;
  if (email) {
    alert(`Thank you for subscribing with ${email}!`);
    newsletterForm.reset();
  } else {
    alert("Please enter a valid email address.");
  }
});
