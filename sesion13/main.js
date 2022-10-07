//console.log(window)

//OBTENER ELEMENTOS

//Obtener por Id
//Imprime un elemento
const titulo = document.getElementById('titulo');
titulo.textContent= 'Otro título manipulando el DOM'
titulo.style.backgroundColor = '#ffffff'
console.log(titulo.style);

//obtener elementos por clase
//Imprime un arreglo por si vienen más clases de .parrafo
const parrafo = document.getElementsByClassName('parrafo');
parrafo[0].textContent = 'Soy un parrafo nuevo';

//Obtener elementos por TagName
//Un arreglo, porque busca todos los elementos h2   
const elementosHTML = document.getElementsByTagName('h2');
console.log(elementosHTML[0].textContent= 'Cambiando el subtítulo');

//Obtener elementos por su clase pero al primero que encuentre
const parrafo2Primero= document.querySelector('.parrafo-2');
console.log(parrafo2Primero);

//Obtener elementos por su clase pero a todos
const parrafo2Todos= document.querySelectorAll('.parrafo-2');
console.log(parrafo2Todos);

//Obtener elementos por su ID pero al primero que encuentre
const tituloH4= document.querySelector('#titulo-h4');
console.log(tituloH4);

//Obtener elementos por su ID pero a todos PERO ESTO NO SE DEBE HACER, ES MALA PRÁCTICA
const tituloH4Todos= document.querySelectorAll('#titulo-h4');
console.log(tituloH4Todos);

//MODIFICAR ELEMENTOS

//1. Obtener el elemento a través del ID
const box= document.getElementById('box');

//2. Le agregamos HTML
//innerHTML--> agrega HTML a mi elemento
box.innerHTML= '<p> Hola <br> mundo </p>';
box.style.padding= '20px';
box.style.border= '1px solid black';

const formulario= document.querySelector('.formulario');
formulario.style.border= '3px solid black';

const inputName= document.getElementById('nombre');
inputName.setAttribute('placeholder', 'Ingresa tu nombre');
inputName.setAttribute('type', 'text');

const idWrapper= document.getElementById('wrapper-nodo')
console.log('Cuántos elementos tiene (lo que yo que veo)-->', idWrapper.childElementCount);
console.log('El número de nodos (No veo todo)--->', idWrapper.childNodes.length);

//Agregando Nodos al DOM
//1. Crear el Nodo
const boxNew= document.createElement('div')

//2. Agregar texto al nodo (crear el nodo de texto)
const textContent= document.createTextNode('Hola desde un nodo');
 
//3. Añdaor el nodo de texto al nodo Div
boxNew.appendChild(textContent);
 

//4. Añadir una clase
boxNew.setAttribute('class', 'boxNew');

//5. Agregar el nodo al Wrapper-nodo

idWrapper.appendChild(boxNew);





