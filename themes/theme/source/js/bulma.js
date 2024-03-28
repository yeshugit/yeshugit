document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("body").removeAttribute('style');
  const body = document.getElementById('body');
  if (body) {
    body.classList.add('has-background-dark');
    body.querySelectorAll('p, div, h1, h2, h3, h4, h5, h6, b, i,strong,label').forEach((el) => {
      el.classList.add('has-text-light');
    });
    const boxes = body.querySelectorAll(".box").forEach((box) => {
      box.classList.add('has-background-black');
    });
  }

  const content = document.getElementById('content');
  if (content) {
    content.querySelectorAll('a').forEach((link)=> {
      link.classList.add('has-text-primary');
    });
  }

  const navBurger = document.querySelector(".navbar-burger");
  const navMenu = document.querySelector(".navbar-menu");

  navBurger.addEventListener('click', function() {
    navBurger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });

  window.onerror = function(z, x, c) {
    alert(z+x+c);
  }
});