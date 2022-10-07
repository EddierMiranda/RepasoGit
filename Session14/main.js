const titulo= document.getElementById('titulo');
console.log(titulo);

const etiquetasH3= document.getElementsByTagName('h3');
console.log(etiquetasH3);

const parrafos= document.querySelectorAll('.parrafo');
console.log(parrafos);



//Obtener hijos desde el Padre
const container= document.getElementById('container');
//childElementCount--> saber cuántos hijos tiene
//children--> 
console.log(container.children);

//Obtener al Padre desde los Hijos

//1. Nos trae a todos los elementos de la clase
const parrafosAll= document.getElementsByClassName('parrafo');

//2. Selecciono el elemento desde la posición
const parrafoSeleccionado= parrafosAll[0]

//3. Llamar al Padre desde el Hijo
const padre= parrafoSeleccionado.parentElement;
console.log(padre);

//MODIFICAR ELEMENTOS

//Obtener div vacío HTML
const divVacio = document.getElementById('id-vacio');

//innerHTML--> agrega etiquetas
divVacio.innerHTML= '<p> Hola estoy dentro del div vacío</p>';
console.log(divVacio);


//textContent --> cambia el texto
parrafoSeleccionado.textContent='Estoy cambiando el párrafo desde JS';



//serAttribute--> Agregar clase de CSS
divVacio.setAttribute('class', 'background');

//Crear un elemento desde cero cuando no hay nada

//Crear el Div
const divImage= document.createElement('div');
divImage.setAttribute('class', 'image');
console.log('--->', divImage);

//Crear la img
const image= document.createElement('img');
image.setAttribute('src', 'https://picsum.photos/200/300');
image.setAttribute('alt', 'imagen al azar');
//console.log('--->', image);

//Agregar un Hijo al Padre
divImage.appendChild(image);

//Conectando divImage con el DOM
container.appendChild(divImage);




//LLAMANDO A UN NODO


const padreNode= parrafoSeleccionado.parentElement;
console.log(padreNode);


//PARA ELIMINAR SE RECOMIENDA CON getElementById

const padreDiv= document.getElementById('padre')
const hijoHola= document.getElementById('hijo')

padreDiv.removeChild(hijoHola)


