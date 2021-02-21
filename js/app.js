'use strict';
var nav = document.querySelector('.header__nav');
var menu = document.querySelector('.header');
var barra = document.querySelector('.header__menu');
var liMenu = document.querySelectorAll('.header__li');
var proy = document.querySelector('.proyectos__tipo');
var flechas = document.querySelectorAll('.proyectos__flecha');
var contacto = document.querySelector('.contacto__pop');
var bContacto = document.querySelector('.contacto__p');
var bCerrar = document.querySelector('.contacto__cerrar');
var sCerrar = document.querySelector('.proyectos__cerrar');
var imagenes = document.querySelectorAll('.proyectos__img');
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
var aGit = document.querySelectorAll('.web');
var ulProyecto = document.querySelectorAll('.proyectos__ul');
var fragmento = document.createDocumentFragment();
ulProyecto.forEach(function (cadaImg, i) {
    var seccion = document.createElement('div');
    seccion.classList.add('proyectos__seccion');
    seccion.appendChild(ulProyecto[i]);
    var alt = aGit[i].getAttribute('title');
    var h3 = document.createElement('h3');
    h3.classList.add('proyectos__h3');
    h3.innerText = alt;
    seccion.appendChild(h3);
    fragmento.appendChild(seccion);
});
proy.appendChild(fragmento);
var seccionProy = document.querySelectorAll('.proyectos__seccion');
seccionProy.forEach(function (cadaP, i) {
    seccionProy[i].addEventListener('click', function () {
        seccionProy[i].classList.toggle('acordeon');
    });
});
// Slider
var foto = 0;
var pasarFoto = function () {
    imagenes.forEach(function (cadaImg, i) {
        imagenes.forEach(function (cadaImg, i) {
            imagenes[i].classList.remove('ver');
        });
        imagenes[foto].classList.add('ver');
    });
};
var siguienteFoto = function () {
    foto++;
    if (foto === imagenes.length) {
        foto = 0;
    }
    pasarFoto();
};
var anteriorFoto = function () {
    if (foto === 0) {
        foto = imagenes.length;
    }
    foto--;
    pasarFoto();
};
flechas[1].addEventListener('click', anteriorFoto);
flechas[0].addEventListener('click', siguienteFoto);
