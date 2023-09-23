var bx1 = window.document.querySelector('input.bx')
        var bx2 = window.document.querySelector('input.bx2')
        function cor(){
            bx1.style.background = "white"

        }function cor2(){
            bx2.style.background = "white"
        }
     
    function somar() {
        var n1 = window.document.getElementById("ns1")
     var n2 = window.document.getElementById("ns2")
     var res = window.document.getElementById("res")
     var n11 = Number(n1.value)
     var n22 = Number(n2.value)
     var s = n11 + n22
     res.innerHTML = `O resultado da soma de  ${n11} + ${n22} e ${s}`
    }
    function subtrair() {
        var n1 = window.document.getElementById("ns1")
     var n2 = window.document.getElementById("ns2")
     var res = window.document.getElementById("res")
     var n11 = Number(n1.value)
     var n22 = Number(n2.value)
     var s = n11 - n22
     res.innerHTML = `O resultado da subtração de  ${n11} - ${n22} e ${s}`
    }
    function multiplicar() {
        var n1 = window.document.getElementById("ns1")
     var n2 = window.document.getElementById("ns2")
     var res = window.document.getElementById("res")
     var n11 = Number(n1.value)
     var n22 = Number(n2.value)
     var s = n11 * n22
     res.innerHTML = `O resultado da multiplicação de  ${n11} * ${n22} e ${s}`
    }
    function dividir() {
        var n1 = window.document.getElementById("ns1")
     var n2 = window.document.getElementById("ns2")
     var res = window.document.getElementById("res")
     var n11 = Number(n1.value)
     var n22 = Number(n2.value)
     var s = n11 / n22
     res.innerHTML = `O resultado da divisão de  ${n11} / ${n22} e ${s}`
    }
    function rdivisao() {
        var n1 = window.document.getElementById("ns1")
     var n2 = window.document.getElementById("ns2")
     var res = window.document.getElementById("res")
     var n11 = Number(n1.value)
     var n22 = Number(n2.value)
     var s = n11 % n22
     res.innerHTML = `O resto da divisão de  ${n11} / ${n22} e ${s}`
    }
