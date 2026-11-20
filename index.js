class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando heróis
let mago = new Heroi("Merlin", 150, "mago");
let guerreiro = new Heroi("Thor", 35, "guerreiro");
let monge = new Heroi("Lee", 40, "monge");
let ninja = new Heroi("Hanzo", 28, "ninja");

// Executando ataques
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();