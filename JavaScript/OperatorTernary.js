//Operator ternary
let umur2 = 20;
let status = umur2 >= 18 ? "boleh minum kopi" : "belum boleh minum kopi";

console.log(status);

let nilai2 = 72;
let hasil3 = nilai2 >= 75 ? "Lulus" : "tidak lulus";
console.log("Hasil " + hasil3);

//Operator Ternary Bersarang (Nested)
let nilai3 = 85;
let predikat =
nilai3 >= 90 ? "A" :
    nilai3 >= 80 ? "B" :
        nilai3 >= 70 ? "C" : "D";
console.log("Predikat: " + predikat);
