let heroi = {
    nome: "Lokzen",
    xp: 8150
};

let niveis = [
    {nome: "Ferro", min: 0, max: 1000},
    {nome: "Bronze", min: 1001, max: 2000},
    {nome: "Prata", min: 2001, max: 5000},
    {nome: "Ouro", min: 5001, max: 7000},
    {nome: "Platina", min: 7001, max: 8000},
    {nome: "Ascendente", min: 8001, max: 9000},
    {nome: "Imortal", min: 9001, max: 10000},
    {nome: "Radiante", min: 10001, max: Infinity }
];

let nivelDoHeroi = "";

for (let nivel of niveis) {
    if (heroi.xp >= nivel.min && heroi.xp <= nivel.max) {
        nivelDoHeroi = nivel.nome;
        break;
    }
}

console.log("O herói de nome " + heroi.nome + " está no nível de " + nivelDoHeroi);