// Desafio: Classificador de Nível de Herói

// Lista de heróis para classificação
const herois = [
    { nome: "Artemis", xp: 800 },
    { nome: "Zephyr", xp: 1500 },
    { nome: "Thor", xp: 3500 },
    { nome: "Nyx", xp: 6000 },
    { nome: "Athena", xp: 7500 },
    { nome: "Erebus", xp: 8500 },
    { nome: "Hercules", xp: 9500 },
    { nome: "Ares", xp: 12000 }
];

// Função para classificar o nível de acordo com a experiência
function classificarHeroi(nome, xp) {
    let nivel = "";

    // Estrutura de decisão para classificar os níveis
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "XP inválido";
    }

    // Retorna a mensagem com o nome e o nível
    return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

// Laço de repetição para exibir o nível de cada herói
herois.forEach(heroi => {
    console.log(classificarHeroi(heroi.nome, heroi.xp));
});
