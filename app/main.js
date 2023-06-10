let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const exibicaoLivros = document.getElementById('livros')

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();

    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivros(livrosComDesconto);
}

//exibe a lista de livros com suas características na tela
function exibirLivros(listaDeLivros) {
    listaDeLivros.forEach((livro) => {
        exibicaoLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt} />
        <h2 class="livro__titulo">
        ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
        `
    });
}

//aplica o desconto de no valor do livro
function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosComDesconto;
}

