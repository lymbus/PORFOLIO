'use strict';
var nav = document.querySelector('.header__nav');
var menu = document.querySelector('.header');
var barra = document.querySelector('.header__menu');
var liMenu = document.querySelectorAll('.header__li');
var proy = document.querySelector('.resumen__tipo');
var contacto = document.querySelector('.contacto__pop');
var bContacto = document.querySelector('.contacto__p');
var bCerrar = document.querySelector('.contacto__cerrar');
var sCerrar = document.querySelector('.resumen__cerrar');
var imagenes = document.querySelectorAll('.resumen__img');
var icono = document.querySelectorAll('.proyectos__icono');
var git = document.querySelectorAll('.proyectos__git');
// Abrir/cerrar CONTACTO
var abrir = function () {
    menu.classList.toggle('ampliar');
    barra.classList.toggle('cerrar');
    nav.classList.toggle('abrir');
};
var popContacto = function () {
    if (contacto.classList.contains('up')) {
        contacto.classList.remove('up');
    }
    else {
        contacto.classList.add('up');
    }
};
bContacto.addEventListener('click', popContacto);
bCerrar.addEventListener('click', popContacto);
liMenu.forEach(function (cadaLi, i) {
    liMenu[i].addEventListener('click', function () {
        contacto.classList.remove('up');
    });
    liMenu[3].addEventListener('click', function (e) {
        e.preventDefault();
        contacto.classList.toggle('up');
    });
});
// Abrir MENÚ
barra.addEventListener('click', abrir);
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        menu.classList.add('ampliar');
    }
    else {
        menu.classList.remove('ampliar');
    }
});
// CREAR 'COMPONENTE'-->PROYECTO
// const aGit= document.querySelectorAll<HTMLElement>    ('.web')
// const ulProyecto= document.querySelectorAll<HTMLElement>    ('.proyectos__ul')
// let fragmento=(document.createDocumentFragment() as DocumentFragment)
// ulProyecto.forEach((cadaImg:any,i:number):void=>{
//       let seccion=   (document.createElement('div') as HTMLElement)  
//       seccion.classList.add('proyectos__seccion') 
//       seccion.appendChild(ulProyecto[i])
//       let alt:string= aGit[i].getAttribute('title')
//       let h3=(document.createElement('h3')as HTMLElement)
//       h3.classList.add('proyectos__h3')
//       h3.innerText=alt
//       seccion.appendChild(h3)
//       fragmento.appendChild(seccion)    
// })
// proy.appendChild(fragmento) 
// const seccionProy=   document.querySelectorAll <HTMLElement>('.proyectos__seccion')
// seccionProy.forEach((cadaP:any,i:number):void=>{
//       seccionProy[i].addEventListener('click',():void=>{
//             seccionProy[i].classList.toggle('acordeon')
//       })
// })
// Slider
// let foto:number=0
// const pasarFoto=():void=>{ 
//       imagenes.forEach((cadaImg :any,i:number)=>{
//           imagenes.forEach((cadaImg,i):void=>{
//               imagenes[i].classList.remove('ver')
//           })
//       imagenes[foto].classList.add('ver') 
//   })
//   }
//   const siguienteFoto= ():void =>{
//       foto++ 
//       if(foto===imagenes.length){
//           foto=0
//       }
//       pasarFoto()
//   }
//   const anteriorFoto=() :void =>{   
//       if(foto===0){
//           foto=imagenes.length
//       }
//       foto--
//       pasarFoto()
//   }
//   flechas[1].addEventListener('click',anteriorFoto)
//   flechas[0].addEventListener('click',siguienteFoto)
//   LINEAS MENÚ
var pincel = document.querySelectorAll('.header__svg');
liMenu.forEach(function (cadaLista, i) {
    liMenu[i].addEventListener('click', function () {
        pincel.forEach(function (cadaLista, i) {
            pincel[i].classList.remove('des');
        });
        pincel[i].classList.add('des');
    });
});
var seccionProy = document.querySelectorAll('.proyectos__seccion');
icono.forEach(function (cadaP, i) {
    icono[i].addEventListener('click', function () {
        git.forEach(function (cadaP, i) {
            git[i].classList.remove('play');
            icono[i].style.opacity = '1';
        });
    });
    icono[i].addEventListener('click', function () {
        git[i].classList.add('play');
        icono[i].style.opacity = '0';
    });
});
