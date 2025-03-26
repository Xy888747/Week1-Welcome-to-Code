// ## Soal 3. Angka Ganjil dan Genap


// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL


let i = 0;
while ( i < 100 )  { i++;
    if (i === 0) continue;
    else if (i % 2 === 0 ) {
        console.log("Genap =", (i))
    } else if (i %2 !== 0) {
        console.log("Ganjil=", (i))
    }
} 
