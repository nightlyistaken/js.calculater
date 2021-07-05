


function sum() {


    var a = document.getElementById("num1").value
    var b = document.getElementById("num2").value
    var op = document.getElementById("op").value

    document.getElementById("result").innerText= eval(a+op+b)
    
}