//Operator Aritmatika
const angkaPertama = 10;
const angkaKedua = 5;

console.log(angkaPertama + angkaKedua); // Penjumlahan
console.log(angkaPertama - angkaKedua); // Pengurangan
console.log(angkaPertama * angkaKedua); // Perkalian
console.log(angkaPertama / angkaKedua); // Pembagian
console.log(angkaPertama % angkaKedua); // Modulus (sisa bagi)
console.log(angkaPertama ** angkaKedua); // Perpangkatan

//Operator Modulus (%)
console.log(10 % 3);

const angka = 8;
const genap = angka % 2 === 0;

console.log(genap);

//Urutan Operasi
const hasil = 10 + 5 * 2; //jika mengikuti urutan operasi matematika

console.log(hasil);

//jika ingin mengubah urutan operasi matematika, kita bisa menggunakan tanda kurung
const hasil2 = (10 + 5) * 2;

console.log(hasil2);

//operator Perbandingan
const nilai = 85;
const Lulus = nilai >= 75;

console.log(`apakah siswa lulus? ${Lulus}`);

//perbandingan ketat
console.log(5 == "5"); //melakukan konversi tipe otomatis
console.log(5 === "5"); //Membandingkan nilai dan tipe data

//operator logika &&
let umur = 18;
let punyaKTP = true;

let bolehMasuk = umur >= 17 && punyaKTP;
console.log(bolehMasuk);

//operator OR ||
const usia = 60;
const anggota = false;

const mendapatDiskon =
    usia >= 55 || anggota === true;

console.log(mendapatDiskon);

//Operator Not !
const sedangLibur = false;

console.log(!sedangLibur);

/* ========================================= */

const sudahLogin = false;

if (!sudahLogin) {
console.log("Silakan login terlebih dahulu. ");
}

//operator penugasan(assignment)
let total = 50;
console.log(total += 25);
console.log(total -= 10);

//Operator Increment dan Decrement
let a = 5;
console.log(a++);
console.log(a);

let b = 5;
console.log(++b);

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

//If statements
let kondisi = true

if (kondisi) {
    //blok kode yang dijalankan jika kondisi bernilai true
}

let hujan = true;

if (hujan) {
    console.log("jangan lupa bawa payung!");
}

//If else statements
let nilai4 = 80;

if (nilai4 >= 75) {
    console.log("Kamu lulus!");
} else {
    console.log("Kamu belum lulus.");
}
