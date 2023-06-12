const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => {
        return livro.categoria == categoria
    });

    exibirLivros(livrosFiltrados)

    if (categoria == 'disponivel') {
        const precoTotal = calcularPrecoTotal(livrosFiltrados)
        return mostrarTarja(precoTotal)
    }
}

function mostrarTarja(precoTotal) {
    tarjaValorTotal.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotal}</span></p>
  </div>
    `
}

function calcularPrecoTotal(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}

