let num = 0
function contar() {
    num++
    if (num == 3 && num <= 3) {
        let change = document.getElementById('footer')
        change.innerHTML = '<button subtmit="" id="btn2"><a href="index.html">Parabéns</button></a>'
        num = 0
    }
}
function calcular() {
    var num = document.getElementById("txtnum")
    var res = document.getElementById("tab")
    var c = 1

    let n = Number(num.value)

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        res.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${n * c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
}
function reset() {
    var num = document.getElementById("txtnum").value = ''
    var res = document.getElementById("tab")
    res.innerHTML = ''
}
