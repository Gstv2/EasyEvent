class Pessoa {
    nome: string
    idade: number

    constructor(nome:string,idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void{
        alert("Olá, meu nome é "+this.nome+" e eu tenho "+this.idade+" anos.") ;
    }
}


let nome: string = prompt("digite seu nome: ");
let idade: number = Number(prompt("digite sua idade: "));

let pessoa1 = new Pessoa(nome,idade);
pessoa1.apresentar()