// encontra o botao pelo id
const btnOrdenar = document.getElementById('btnOrdenarPorPreco');

// adiciona um evento de click no botão, que chamará a função para ordenar livros
btnOrdenar.addEventListener('click', ordenarLivros);

// ordena os livros do menor para o maior de acordo com o preço e exibe na tela
function ordenarLivros() {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}