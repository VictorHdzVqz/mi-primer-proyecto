// ==========================
// CONEXIÓN SUPABASE
// ==========================


const supabaseUrl = "https://pkmtoowukormgkujxaax.supabase.co";


const supabaseKey = "sb_publishable_pG9vEDCI5O_cY5-3ULdDjQ_tfs8dpPt";



let supabaseClient;



if(window.supabase){


  supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
  );


}else{


  console.error(
    "Supabase no fue cargado correctamente"
  );


}







// ==========================
// CUANDO CARGA LA PAGINA
// ==========================


document.addEventListener("DOMContentLoaded", () => {





// ==========================
// SCROLL SUAVE DEL MENU
// ==========================


const navLinks = document.querySelectorAll(".nav__link");



navLinks.forEach(link => {



link.addEventListener("click",(e)=>{


e.preventDefault();



const section = document.querySelector(
  link.getAttribute("href")
);



if(section){



section.scrollIntoView({

behavior:"smooth",

block:"start"

});



}




// cerrar menu movil

const checkbox = document.querySelector(
".header__checkbox"
);



if(checkbox){

checkbox.checked = false;

}



});



});








// ==========================
// ANIMACION REVEAL
// ==========================



const sections = document.querySelectorAll(
".reveal"
);




const observer = new IntersectionObserver(
(entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){


entry.target.classList.add(
"is-visible"
);


}



});



},


{


threshold:0.20


}




);






sections.forEach(section=>{


observer.observe(section);


});









// ==========================
// NAVBAR TRANSPARENTE
// ==========================



const header = document.querySelector(
".header"
);



if(header){



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){



header.classList.add(
"header--scroll"
);



}else{



header.classList.remove(
"header--scroll"
);



}



}

);



}









// ==========================
// SUBIDA DE PDF
// ==========================



const form = document.getElementById(
"uploadForm"
);



const inputFile = document.getElementById(
"pdfFile"
);





if(form && inputFile){



form.addEventListener(
"submit",
async(e)=>{



e.preventDefault();




const file = inputFile.files[0];





if(!file){


alert(
"Selecciona un archivo PDF"
);


return;


}







// validar tipo


if(file.type !== "application/pdf"){



alert(
"Solo se permiten archivos PDF"
);



return;


}







// limite 5MB


const maxSize = 5 * 1024 * 1024;



if(file.size > maxSize){



alert(
"El archivo no debe superar 5MB"
);



return;


}







const button = form.querySelector(
"button"
);





button.textContent =
"Subiendo...";



button.disabled = true;









// nombre único


const fileName = 
`${Date.now()}-${file.name}`;










try{



const {data,error} = await supabaseClient

.storage

.from("pdfs")

.upload(
fileName,
file
);







if(error){



console.error(error);



alert(
"Error al subir archivo"
);



return;



}







alert(
"PDF subido correctamente"
);



console.log(data);






form.reset();






}

catch(error){



console.error(error);



alert(
"Ocurrió un error"
);



}

finally{



button.textContent =
"Subir PDF";



button.disabled = false;



}





}



);



}



});