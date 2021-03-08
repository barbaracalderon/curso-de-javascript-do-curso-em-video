function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO: Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.jpeg')
            } else {
                img.setAttribute('src', 'idoso.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.jpeg')
            } else {
                img.setAttribute('src', 'idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos:`
        res.appendChild(img)
    }

}