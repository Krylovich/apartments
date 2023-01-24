window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
  
      document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.logo').clientHeight <= scrollDistance) {
          document.querySelectorAll('.nav-link').forEach((el) => {
            if (el.classList.contains('active')) {
              el.classList.remove('active');
            }
          });
  
          document.querySelectorAll('.nav li')[i].querySelector('.nav-link').classList.add('active');
        }
      });
  });