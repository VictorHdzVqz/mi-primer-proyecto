// ==========================
// CONEXIÓN SUPABASE
// ==========================

const supabaseUrl = "TU_URL_SUPABASE";

const supabaseKey = "TU_PUBLISHABLE_KEY";


const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);




// ==========================
// CUANDO CARGA LA PAGINA
// ==========================

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


    entries.forEach(entry=>{


      if(entry.isIntersecting){


        entry.target.classList.add("is-visible");


      }


    });



  },{


    threshold:0.20


  });




  sections.forEach(section=>{


    observer.observe(section);


  });






  // ==========================
  // NAVBAR TRANSPARENTE AL SCROLL
  // ==========================


  const header = document.querySelector(".header");



  window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


      header.classList.add("header--scroll");


    }else{


      header.classList.remove("header--scroll");


    }


  });







  // ==========================
  // SUBIR PDF A SUPABASE
  // ==========================



  const form = document.getElementById("uploadForm");



  if(form){


    form.addEventListener("submit", async(e)=>{


      e.preventDefault();



      const file = document
      .getElementById("pdfFile")
      .files[0];




      if(!file){


        alert("Selecciona un PDF");

        return;


      }





      const {data,error} = await supabaseClient

      .storage

      .from("documentos")

      .upload(

        file.name,

        file

      );






      if(error){


        console.log(error);


        alert("Error al subir archivo");



      }else{


        console.log(data);


        alert("PDF subido correctamente");


      }




    });


  }



});