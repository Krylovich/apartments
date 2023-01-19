let navTog = document.querySelector('#navTog');
let nav = document.querySelector('#header');
let burger = document.querySelector('#burger');
let logo = document.querySelector('#logo');


    const toggleBurger = () => {

        nav.classList.toggle('show');

        document.body.classList.toggle('no-scroll');

        burger.classList.toggle('open');
    }; 

        const hideNav = () => {

            nav.classList.remove('show');

            document.body.classList.remove('no-scroll');

            document.getElementById('navTog').checked = false;

            burger.classList.remove('open');
        }

        navTog.addEventListener('click', () => {

          toggleBurger();

        });

        document.querySelectorAll(".nav-link").forEach(element => {

           element.addEventListener("click", hideNav);

        }); 

       logo.addEventListener("click", hideNav);
 



        

        