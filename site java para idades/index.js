function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados novamente')
    } else {
        var fsex = window.document.getElementsByName('radisex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criança mas.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/homem.jpg')
            } else {
                //velho
                img.setAttribute('src', 'img/velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'femenino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criança fem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem fem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/mulher.jpg')
            } else {
                //velho
                img.setAttribute('src', 'img/velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}