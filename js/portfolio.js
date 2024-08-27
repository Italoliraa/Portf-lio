var nome = prompt('Digite o seu nome:');

if (nome) {
    document.querySelector('h1').textContent = 'Oii, ' + nome + '!';
} else {
    document.querySelector('h1').textContent = 'Oii, visitante!';
}