function gerarCalculo() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const num1 = parseInt(document.getElementById('num1').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const p = document.createElement('p');
        p.textContent = `${num1} * ${element} = ${num1 * element}`;
        resultado.appendChild(p);
      }
}