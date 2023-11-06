function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var alt = parseFloat(document.getElementById("alt").value);

    if (!isNaN(peso) && !isNaN(alt)) {
        var imc = peso / (alt * alt);
        document.getElementById("result").innerHTML = "Seu IMC é: " + imc.toFixed(2);

        var classificacao = "";
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 24.9) {
            classificacao = "Peso ideal (Parabéns)";
        } else if (imc < 29.9) {
            classificacao = "Levemente acima do peso";
        } else if (imc < 34.9) {
            classificacao = "Obesidade grau I";
        } else if (imc < 39.9) {
            classificacao = "Obesidade grau II (severa)";
        } else {
            classificacao = "Obesidade grau III (mórbida)";
        }

        document.getElementById("classificacao").innerHTML = "Classificação: " + classificacao;
    } else {
        document.getElementById("result").innerHTML = "Por favor, insira valores válidos para peso e altura.";
        document.getElementById("classificacao").innerHTML = "";
    }
}

document.getElementById("btn-girl").addEventListener("click", function () {
    document.getElementById("principal").style.backgroundColor = "#F9D8FF";
    document.getElementById('img1').src = 'img/Captura de tela 2023-10-30 150109.png';
}, false);
document.getElementById("btn-boy").addEventListener("click", function () {
    document.getElementById("principal").style.backgroundColor = "#829DFF";
    document.getElementById('img1').src='img/Captura de tela 2023-10-30 150543.png';
}, false);