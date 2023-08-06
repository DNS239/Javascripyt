function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 13
    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'Manhã.png'
        document.body.style.background = 'yellow'
    }else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = 'Tarde.png'
        document.body.style.background = 'orange'
    }else {
        //boa noite!
        img.src = 'Noite.png'
        document.body.style.background = 'darkred'
    }
}