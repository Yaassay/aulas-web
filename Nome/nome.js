function gerar() {
    const nome = document.getElementById('nome').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const letras = nome.split('');

    for (let i = 0; i < letras.length; i++) {
        const p = document.createElement('p');
        p.textContent = letras[i];
        resultado.appendChild(p);
    }
}