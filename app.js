function openNav() {
  document.querySelector('.section-banner__sidebar').style.width = '400px';
  document.querySelector('body').style.overflow = 'hidden';
}

function closeNav() {
  document.querySelector('.section-banner__sidebar').style.width = '0';
  document.querySelector('body').style.overflow = 'scroll';
}