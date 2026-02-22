function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
// var hora = data.getHours()
var hora = 20

if(hora >= 0 && hora < 12){
    img.src = 'imagem/manha.png'
    document.body.style.background = '#D9CECC'
    msg.innerHTML = `Agora são ${hora} horas! Bom dia!`

    //BOM DIA
}
 else if (hora >=12 && hora <= 18){
    msg.innerHTML = `Agora são ${hora} horas! Boa tarde!`

        img.src = 'imagem/tarde.png'
        document.body.style.background = '#d38d4f79'

    // BOA TARDE
}

else {
        img.src = 'imagem/noite.png'
        document.body.style.background = '#232f34'
        msg.innerHTML = `Agora são ${hora} horas! Boa noite!`

       
    // BOA NOITE
}


}

