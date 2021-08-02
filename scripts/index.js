const analyzeGrades = () => {
    const primeira = parseInt(document.getElementById('primeira').value);
    const segunda = parseInt(document.getElementById('segunda').value);
    const terceira = parseInt(document.getElementById('terceira').value);
    const quarta = parseInt(document.getElementById('quarta').value);

    const media = (primeira + segunda + terceira + quarta) / 4;

    if (media >= 6) { document.getElementById('resultado').value = 'Aprovado.' }
    else if (media < 6 && media >= 4) { document.getElementById('resultado').value = 'Prova final.' }
    else if (media < 4) { document.getElementById('resultado').value = 'Reprovado.' }
    else { document.getElementById('resultado').value = 'Notas inválidas.' }
}