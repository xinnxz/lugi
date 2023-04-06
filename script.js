// membuat smooth scroll untuk anchor link di header
const headerLinks = document.querySelectorAll('header ul li a');

headerLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    const topOffset = target.offsetTop;

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  });
});

// membuat toggle menu pada responsive mode
const navCheckbox = document.querySelector('header input[type="checkbox"]');
const navLabel = document.querySelector('header .nav label');
const navDiv = document.querySelector('header .navDiv');

navLabel.addEventListener('click', () => {
  if (navCheckbox.checked) {
    navDiv.style.display = 'none';
  } else {
    navDiv.style.display = 'flex';
  }
});
