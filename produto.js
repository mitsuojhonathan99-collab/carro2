class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  valorEmEstoque() {
    return this.preco * this.quantidade;
  }
}

const produtos = [
  new Produto("Caderno", 12.5, 40),
  new Produto("Caneta", 2.5, 100),
];

for (const produto of produtos) {
  console.log(
    `${produto.nome}: R$ ${produto.valorEmEstoque().toFixed(2)} em estoque`
  );
}