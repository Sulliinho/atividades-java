
function media() {
    let nom = window.prompt('Qual é o seu nome meliante ?') 
    let n1 = Number(window.prompt(`Qual foi a primeira nota que vc tirou, ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota do senhor, ${nom}?`))
    med = (n1 + n2)/2 
    
    let msg // cria uma variável e deixa ela vazia
    if (med >= 6) { 
        msg = 'fez mais que sua obrigação!'
    } else { 
        msg = 'poh man, ta de sacanagem? vai estudar garai!'
    }
    

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Por fim mais uma vez, Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas que vc conseguiu foram <mark>${n1} e ${n2}</mark>.</p>` 
    res.innerHTML += `<p>A média final ent é<mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A unica coisa que eu tenho pra te falar é: <strong style='color:red;'>${msg}</strong></p>` 
}