function carregar(){ //fica fácil de chamar, códigos em funções
    //armazena os elementos html nas variaveis pra brincar
    //VARIAVEIS
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date() //pega a data e hora atual
    var hora = data.getHours() //através do objeto anterior pega a hora
    
    //INICIO
    msg.innerHTML = hora //altera o conteudo armazenado na variável
    //muda a imagem pra cada resultado de if
    if (hora >= 0 && hora < 12){
        //bom dia
        imagem.src = "manha.png"
        document.body.style.background = "#fced9c"
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        imagem.src = "tarde.png"
        document.body.style.background = "#723438"
    }else{
        //boa noite
        imagem.src = "noite.png"
        document.body.style.background = "#1f1f21"
    }
}
