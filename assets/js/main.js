console.log("JavaScript funcionando");


//Referencias los objetos del DOM
const menuDesplegable = document.querySelector('.navegation-menu');
const menuHamburger = document.querySelector('.hamburger-menu');

//Mostrar el menu desplegable
//Hacer un toggle para mostrar el menu

menuHamburger.addEventListener('click',()=>{
    menuDesplegable.classList.toggle("show")        
})

//Capturar el evento del elemento en el Dom, para cerrar el menu cuando se de click a la pantalla
window.addEventListener('click',e=>{
if(menuDesplegable.classList.contains('show') && e.target != menuHamburger && e.target != menuDesplegable){
    menuDesplegable.classList.toggle("show")   
}
});

//Efecto de Lightbox 

const imagenes = document.querySelectorAll('.img-galeria');
const imagenLight = document.querySelector('.add-img');
const contenedorLight = document.querySelector('.image-light');


//Agregar event listener a todos las imagenes y obtener el path
imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        let pathImage = imagen.getAttribute('src')
        RenderImagenLigthBox(pathImage);
    })
})

//Agregar la imagen al contenido del ligth box

const RenderImagenLigthBox = (imagen)=>{
    imagenLight.src=imagen;
    contenedorLight.classList.toggle("show");
    imagenLight.classList.toggle("showImage");
    menuHamburger.style.opacity='0';
}

//Cerrar el contenedor de ligth box

    contenedorLight.addEventListener('click', (e)=>{
        if(e.target !== imagenLight){
            contenedorLight.classList.toggle("show");
            imagenLight.classList.toggle("showImage");
            menuHamburger.style.opacity='1';
        }
    })
