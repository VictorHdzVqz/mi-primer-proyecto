document.addEventListener("DOMContentLoaded", () => {


  // ==========================
  // SCROLL SUAVE DEL MENU
  // ==========================

  document.querySelectorAll(".nav__link").forEach(link => {

    link.addEventListener("click", (e) => {

      e.preventDefault();

      const targetId = link.getAttribute("href");

      const target = document.querySelector(targetId);


      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });


    });

  });



  // ==========================
  // ANIMACION DE SECCIONES
  // ==========================

  const sections = document.querySelectorAll(".reveal");


  const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry => {


      if(entry.isIntersecting){

        entry.target.classList.add("is-visible");

      }


    });


  },{

    threshold: 0.20

  });



  sections.forEach(section => {

    observer.observe(section);

  });




  // ==========================
  // NAVBAR TRANSPARENTE
  // ==========================

  const header = document.querySelector(".header");


  window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

      header.classList.add("header--scroll");

    }else{

      header.classList.remove("header--scroll");

    }


  });


});