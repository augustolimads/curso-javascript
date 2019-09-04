function verificar(){
    //VARIAVEIS
    var data = new Date() //armazenei um metodo numa var
    var ano = data.getFullYear()
    var nasc = document.getElementById("nasc")
    var resultado = document.getElementById("resultado")
    var sexo = document.getElementsByName("sexo")
    var idade = 0 //começa vazio
    var genero = '' //depois eu vejo
    var img = document.createElement('img')


    //INICIO
    //verificando se a data de nascimento está correta
    if (nasc.value.length == 0 || nasc.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        idade = ano - Number(nasc.value)
        //cuidado, resultado.innerhtml não é uma função
        
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 3){
                //bebê
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade > 3 && idade <= 12){
                //criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade > 12 && idade <= 17){
                //adolescente
                img.setAttribute('src', 'homem-adolescente.png')
            } else if (idade > 17 && idade <= 29){
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade > 29 && idade <= 59){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else if (idade > 59 && idade <= 200){
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            } else{
                //morto
                img.setAttribute('src', 'morreu.png')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3){
                //bebê
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade > 3 && idade <= 12){
                //criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade > 12 && idade <= 17){
                //adolescente
                img.setAttribute('src', 'mulher-adolescente.png')
            } else if (idade > 17 && idade <= 29){
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade > 29 && idade <= 59){
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else if (idade > 59 && idade <= 200){
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
            } else{
                //morto
                img.setAttribute('src', 'morreu.png')
            }
        }
        resultado.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        //Trabalhando com as fotos
        //img.setAttribute('id','foto')
        resultado.appendChild(img)
    }
}