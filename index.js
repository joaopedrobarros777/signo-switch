let rs = require("readline-sync")

let dia = rs.questionInt("digite o numero de um dia do mes\n")
let mes = rs.questionInt("digite um mes de 1 a 12\n")

if (dia > 31){
    if (dia < 0) {
    console.log("numero invalido")
}
}

switch (mes) {
    case 1:
        dia <= 21 ? consele.log("Aquario") : console.log("Capricornio")
        break
    case 2:
        dia <= 18 ? console.log("Aquario") : console.log("Peixes")
        break
    case 3:
        dia <= 20 ? console.log("Peixes") : console.log("Aries")
        break
    case 4:
        dia <= 20 ? console.log("Aries") : console.log("touro")
        break
    case 5:
        dia <= 21 ? console.log("touro") : console.log("gemeos")
        break
    case 6:
        dia <= 21 ? console.log("gemeos") : console.log("cancer")
        break
    case 7:
        dia <= 22 ? console.log("cancer") : console.log("leao")
        break
    case 8:
        dia <= 23 ? console.log("leao") : console.log("virgem")
        break
    case 9:
        dia <= 22 ? console.log("virgem") : console.log("libra")
        break
    case 10:
        dia <= 22 ? console.log("libra") : console.log("escorpiao")
        break
    case 11:
        dia <= 21 ? console.log("escorpiao") : console.log("sagitario")
        break
    case 12:
        dia <= 21 ? console.log("sagitario") : console.log("capricornio")
}