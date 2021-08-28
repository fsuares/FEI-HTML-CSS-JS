while (true) {
    let base = parseFloat(prompt('Medida da base: '))
    let altura = parseFloat(prompt('Medida da altura: '))

    if (base <= 0 || altura <= 0) {
        window.alert('Medida inválida')
    } else {
        window.alert('Área do triangulo = ' + base*altura/2)
        break
    }
}

