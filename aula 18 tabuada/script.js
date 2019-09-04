function tabuada(){
    //VARIAVEIS
    var numero = document.getElementById('numero')
    var tab = document.getElementById('seltab')
    var result = 0;
    var resposta = document.getElementById('resultado')
    //validação
    if (numero.value.length == 0){
        window.alert('Por favor digite um número válido. Considerar 0')
    } else{
        tab.innerHTML = '' //usa pra limpar as opções
        var num = Number(numero.value)
        //tabuada
        for(c=0; c <= 10; c++){
            var item = document.createElement('option')
            item.text += `${num} X ${c} = ${result = num * c}`
            item.value = `tab${c}` //isso so vai servir pra mysql,etc
            tab.appendChild(item)
        }
    } 
}   