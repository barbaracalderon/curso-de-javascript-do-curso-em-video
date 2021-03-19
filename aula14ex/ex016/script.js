function contar() {
    var inicio = document.querySelector('div#txtinicio')
    var fim = document.querySelector('div#txtfim')
    var passo = document.querySelector('div#txtpasso')
    var res = document.querySelector('div#res')


    res.style.textAlign = 'center'
    res.innerHTML = `Você selecionou início em ${inicio}, fim em ${fim} e passo de ${passo}.`

}