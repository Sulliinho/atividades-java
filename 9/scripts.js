

let contador = 0 
let res = document.querySelector('section#result')


function contar() {
    contador ++ 
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> de arrependimentos.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
    res.innerHTML= '<h1>VOCE NÃO TEM MAIS ARREPENDIMENTOS, MEUS PARABEINS!!!</h1>'
}