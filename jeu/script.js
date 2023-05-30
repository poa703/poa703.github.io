window.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars-container');
  
    function createStar() {
      const star = document.createElement('span');
      star.classList.add('star');
  
      const size = Math.random() * 4;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
  
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
  
      starsContainer.appendChild(star);
    }
  
    function createStars() {
      for (let i = 0; i < 100; i++) {
        createStar();
      }
    }
  
    createStars();
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const includeDivs = document.querySelectorAll('div[include]');
    includeDivs.forEach(function (div) {
      const filePath = div.getAttribute('include');
      fetch(filePath)
        .then(function (response) {
          return response.text();
        })
        .then(function (html) {
          div.innerHTML = html;
        });
    });
  });
  