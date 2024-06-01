document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded with JavaScript');
  const hamburger = document.getElementById('hamburger');
  const cross = document.getElementById('cross');
  const smallNavLinks = document.getElementById('small_nav_links');

  hamburger.addEventListener('click', function () {
    smallNavLinks.classList.remove('hidden');
    setTimeout(() => {
      hamburger.classList.add('hidden');
      smallNavLinks.classList.add('show');
      cross.classList.add('show');
    }, 10);
  });

  cross.addEventListener('click', function () {
    smallNavLinks.classList.remove('show');
    setTimeout(() => {
      hamburger.classList.remove('hidden');
      smallNavLinks.classList.add('hidden');
      cross.classList.remove('show');
    }, 300);
  });
});
