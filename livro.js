class Livro {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  descrever() {
    return `O livro "${this.titulo}" foi escrito por ${this.autor} e tem ${this.paginas} páginas.`;
  }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 256);
const livro2 = new Livro("O Hobbit", "J. R. R. Tolkien", 310);

console.log(livro1.descrever());
console.log(livro2.descrever());