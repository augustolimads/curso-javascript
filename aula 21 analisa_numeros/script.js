/* 
adiciona o numero
coloca o numero dentro de uma lista
coloca o numero num option

*/
/*----------------------------------------------------------------- */
//VARIAVEIS
var num = document.getElementById('numero')
var lista = window.document.getElementById('seletor')
var res = document.getElementById('resultado')
var valores = [] 

//INICIO
function isNumero(n){ //verifica se é um número
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){ //verifica se já consta na lista
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}


function adicionar(){   
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor não encontrado ou já está na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores){ //varrendo lista
            soma += valores[pos] 
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        //`<p></p>`
        res.innerHTML += `<p>Ao todo temos ${total} elementos. </p>`
        res.innerHTML += `<p>Maior = ${maior}</p>`
        res.innerHTML += `<p>Menor = ${menor}</p>`
        res.innerHTML += `<p>Soma = ${soma}</p>`
        res.innerHTML += `<p>Média = ${media}</p>`
    }
}