'use strict'

const nav    = ( document.querySelector ('.header__nav')  as HTMLElement )
const menu   = ( document.querySelector ('.header')       as HTMLElement )
const barra  = ( document.querySelector ('.header__menu') as HTMLElement )
const liMenu =   document.querySelectorAll <HTMLElement>   ('.header__li')
const proy=( document.querySelector ('.proyectos__tipo') as HTMLElement )
const flechas=document.querySelectorAll<HTMLImageElement>('.proyectos__flecha')

const contacto   = ( document.querySelector ('.contacto__pop')    as HTMLElement )
const bContacto  = ( document.querySelector ('.contacto__p')      as HTMLElement )
const bCerrar    = ( document.querySelector ('.contacto__cerrar') as HTMLElement )
const sCerrar    = ( document.querySelector ('.proyectos__cerrar') as HTMLElement )
const imagenes   =   document.querySelectorAll <HTMLElement>   ('.proyectos__img')

// Abrir/cerrar CONTACTO
let abrir=():void=>{
      menu.classList.toggle('ampliar')
      barra.classList.toggle('cerrar')
      nav.classList.toggle('abrir')
}

let popContacto=():void=>{
     
      if(contacto.classList.contains('up')){
            contacto.classList.remove('up')
      }
      else{
            contacto.classList.add('up')
      }
}
bContacto.addEventListener('click',popContacto)
bCerrar  .addEventListener('click',popContacto)

liMenu.forEach((cadaLi:any,i:number):void =>{
      liMenu[i].addEventListener('click',():void =>{
            contacto.classList.remove('up')      
      })
      liMenu[3].addEventListener('click',(e):void=>{
            e.preventDefault();
            contacto.classList.toggle('up')
      })
      
})
// Abrir MENÚ
barra.addEventListener('click',abrir)

window.addEventListener('scroll',():void=>{    
            if(window.scrollY>500 ){
                  menu.classList.add('ampliar')           
            }
            else{
                  menu.classList.remove('ampliar')
            }        
})
                   
// CREAR 'COMPONENTE'-->PROYECTO
const aGit= document.querySelectorAll<HTMLElement>    ('.web')
const ulProyecto= document.querySelectorAll<HTMLElement>    ('.proyectos__ul')

let fragmento=(document.createDocumentFragment() as DocumentFragment)

ulProyecto.forEach((cadaImg:any,i:number):void=>{
      let seccion=   (document.createElement('div') as HTMLElement)  
      seccion.classList.add('proyectos__seccion') 
      seccion.appendChild(ulProyecto[i])
            
      let alt:string= aGit[i].getAttribute('title')
      let h3=(document.createElement('h3')as HTMLElement)
      h3.classList.add('proyectos__h3')
      h3.innerText=alt
      seccion.appendChild(h3)
      fragmento.appendChild(seccion)    
})
proy.appendChild(fragmento) 
const seccionProy=   document.querySelectorAll <HTMLElement>('.proyectos__seccion')


seccionProy.forEach((cadaP:any,i:number):void=>{
      seccionProy[i].addEventListener('click',():void=>{
            seccionProy[i].classList.toggle('acordeon')
      })
})

// Slider
let foto:number=0
const pasarFoto=():void=>{ 
      imagenes.forEach((cadaImg :any,i:number)=>{
          imagenes.forEach((cadaImg,i):void=>{
              imagenes[i].classList.remove('ver')
          })
      imagenes[foto].classList.add('ver') 
  })
  }
  const siguienteFoto= ():void =>{
      foto++ 
      if(foto===imagenes.length){
          foto=0
      }
      pasarFoto()
  }
  
  const anteriorFoto=() :void =>{   
      if(foto===0){
          foto=imagenes.length
      }
      foto--
      pasarFoto()
  }
  
  flechas[1].addEventListener('click',anteriorFoto)

  flechas[0].addEventListener('click',siguienteFoto)