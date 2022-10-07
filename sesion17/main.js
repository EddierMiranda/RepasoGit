//FUNCIONES

//Conjunto de instrucciones que que realizan p

function volumenCubo(num1){
    const resultado = num1*num1*num1
    return resultado

}

const volumen= volumenCubo(3)
console.log(volumen)


function volumenPiramide(arista, altura){
    const resultado= (1/3)*(arista*arista)*(altura)
    return resultado
}

const volumenP= volumenPiramide(2,3)
console.log('Volumen de la pirámide es:', volumenP)


const volumenPiramideArrow= (arista, altura) =>{
    const resultado= (1/3)*(arista*arista)*(altura)
    return resultado
}

const resultadoVolumenPArrow= volumenPiramideArrow(2,3)
console.log(resultadoVolumenPArrow)


//Función

const root= document.getElementById('root')
root.innerHTML = ' <div class="box"> <h4>Hola mundo</h4> <p class="text"> Descripción</p> <button type="button">Haz click </button> </div>'


const divRoot= document.getElementById('root')
//divRoot.setAttribute('id', 'root')

const divCard= document.createElement('div')
divCard.setAttribute('class', 'card')

const h3= document.createElement('h3')
h3.textContent= 'Imagen uno'

const p= document.createElement('p')
p.textContent= 'Descripción de la imagen'


const img= document.createElement('img')
img.setAttribute('class', 'size')
img.setAttribute('alt', 'bosque')
img.setAttribute('src', 'https://images.unsplash.com/photo-1664990594768-d6ed59d8983a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')


divCard.appendChild(h3)
divCard.appendChild(p)
divCard.appendChild(img)
divRoot.appendChild(divCard)

console.log(divRoot)