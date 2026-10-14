
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  descricao() {
    return `${this.marca} ${this.modelo} (${this.ano})`;
  }

  calcularIdade(anoAtual) {
    return anoAtual - this.ano;
  }
}

const carros = [
  new Carro("Fiat", "Uno", 2015),
  new Carro("Volkswagen", "Gol", 2020),
  new Carro("Chevrolet", "Onix", 2022),
];

for (const carro of carros) {
  console.log(carro.descricao());
  console.log(`Idade: ${carro.calcularIdade(2026)} anos`);
}


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