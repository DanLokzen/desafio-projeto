let heroi = "Lokzen"
let xp = 9500

switch (true) {
    case 1000:
        console.log("O Herói de nome " + heroi + " está no nível de ferro")
        break

    case 1001 && xp <= 2000:
        console.log("O Herói de nome " + heroi + " está no nível de bronze")
        break

    case 2001 && xp <= 5000:
        console.log("O Herói de nome " + heroi + " está no nível de prata")
        break
    
    case 5001 && xp <= 7000:
        console.log("O Herói de nome " + heroi + " está no nível de ouro")
        break
    
    case 7001 && xp <= 8000:
        console.log("O Herói de nome " + heroi + " está no nível de platina")
        break

    case 8001 && xp <= 9000:
        console.log("O Herói de nome " + heroi + " está no nível de Ascendente")
        break

    case 9001 && xp <= 10000:
        console.log("O Herói de nome " + heroi + " está no nível de Imortal")
        break
    
    case 10001:
        console.log("O Herói de nome " + heroi + " está no nível de Radiante")
        break
};  