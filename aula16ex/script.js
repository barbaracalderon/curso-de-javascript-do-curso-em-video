let num = document.querySelector('input#txtn')
let vet = document.querySelector('select#selvet')
let res = document.querySelector('div#res')
let valores = []

function ehNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (ehNumero(num.value) && !naLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        vet.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já computado.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores cadastrados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`
    }
}