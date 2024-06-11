// crie uma biblioteca que voce pode adicionar, remover, listar livros, os livros possuem os atributos, nome, tamanho, autor, genero
// vai ser utilizado array para guardar os livros, objeto para os livros, processo de leitura, condicionais para ler os dados e ver o que o usuario deseja fazer
let livro = {
  nome: "",
  tamanho: "",
  autor: "",
  genero: "",
};
let biblioteca = [];
let entrada = 0;

console.log(
  "Opções da biblioteca:\n1. Adicionar livro\n 2.Remover livro\n3. Listar livros\n4.Sair"
);
switch (entrada) {
  case "1":
    console.log("Adicione o nome do livro.");
    break;
  case "2":
  case "3":
  case "4":
}

process.stdout.write("Adicione o nome do livro \n");
process.stdin.on("data", function (data) {
  if (data.toString().trim() == "sair") {
    console.log(biblioteca);
    console.log("Lista de livros.");
    process.exit();
  }
  if (!livro.nome) {
    livro.nome = data.toString().trim();
    process.stdout.write("Digite o tamanho do livro.\n");
  } else if (!livro.tamanho) {
    livro.tamanho = data.toString().trim();
    process.stdout.write("Digite o autor do livro.\n");
  } else if (!livro.autor) {
    livro.autor = data.toString().trim();
    process.stdout.write("Digite o seu gênero.\n");
  } else {
    livro.genero = data.toString().trim();
    biblioteca.push(livro);
    livro = {};
    console.log(biblioteca);
    console.log("Adicione outro livro ou digite sair para concluir.\n");
  }
});
