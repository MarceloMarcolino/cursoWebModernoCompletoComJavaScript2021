const a = {name: 'Teste'};
const b = a;
console.log(b);
b.name = 'Opa';
console.log(a);
let c = 3;
let d = c;
d++;
console.log(d);
console.log(c);

let valor // não inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco);
// console.log(produto.preco.a);// Erro!
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null // sem preco
console.log(!!produto.preco);
console.log(produto);