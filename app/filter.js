const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => {
        return livro.categoria == categoria
    });

    exibirLivros(livrosFiltrados)
}