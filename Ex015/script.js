function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRo]Verifique os dados e tente novamente.')
    }else {
        //var fsex = document.getElementsByName('radsex')
        var gênero_masculino = document.getElementById('masculino')
        var gênero_feminino = document.getElementById('feminino')
        var idade = ano-Number(fano.value) 
        var gênero = 'Homem'
        var gênero = 'Mulher'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (gênero_masculino.checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'captain-america-bb.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'captain-america-jovem.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'captain-america-adulto.png')
            }else {
                //Idoso
                img.setAttribute('src', 'captain-america-velho.png')
            }
        }else if(gênero_feminino.checked) { 
            gênero = 'Mulher'
           if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'arlerquina-bb2.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'alerquina-jovem.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'arlerquina-adulta.png')
            }else {
                //Idoso
                img.setAttribute('src', 'arlerquina-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
    
}