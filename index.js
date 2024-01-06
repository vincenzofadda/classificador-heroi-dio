let heroi = {
    nome: "Guerreiro",
    exp: 9999,
    nivel: ""
};
  
if (heroi.exp < 1000) {
    heroi.nivel = "Ferro";
} else if (heroi.exp <= 2000) {
    heroi.nivel = "Bronze";
} else if (heroi.exp <= 5000) {
    heroi.nivel = "Prata";
} else if (heroi.exp <= 7000) {
    heroi.nivel = "Ouro";
} else if (heroi.exp <= 8000) {
    heroi.nivel = "Platina";
} else if (heroi.exp <= 9000) {
    heroi.nivel = "Ascentende";
} else if (heroi.exp <= 10000) {
    heroi.nivel = "Imortal";
} else {
    heroi.nivel = "Radiante";
}

console.log("O herói de nome " + heroi.nome + " está no nível " + heroi.nivel)