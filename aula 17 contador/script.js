function contando(){
    //VARIAVEIS
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('saída')

    //INICIO
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Falta dados.')
    } else{
        resultado.innerHTML = 'contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p<= 0){
            window.alert('Passo Inválido (considerando passo igual a 1)')
            p = 1
        }
        if(i <= f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                resultado.innerHTML += `${c}  \u{1F449}  `
            }
        }else{
            //contagem regressiva
            for(var c = i; c >= f; c -= p){
                resultado.innerHTML += `${c}  \u{1F449}  `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}