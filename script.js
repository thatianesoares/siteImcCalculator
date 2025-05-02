function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos!";
        resultado.style.backgroundColor = "#ffe6f2";
        resultado.style.borderColor = "#ff69b4";
        resultado.style.display = "block";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    let cor = '';
    
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        cor = "#fff0f6";
    } else if (imc < 25) {
        classificacao = 'Peso normal';
        cor = "#ffebf3";
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
        cor = "#ffd1e0";
    } else {
        classificacao = 'Obesidade';
        cor = "#ffb6c1";
    }

    resultado.innerHTML = `
        <strong style="color: #d6336c;">Seu IMC:</strong> ${imc.toFixed(2)}<br>
        <strong style="color: #d6336c;">Classificação:</strong> ${classificacao}
    `;
    resultado.style.backgroundColor = cor;
    resultado.style.display = "block";
}
