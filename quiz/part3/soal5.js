// ## Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****


let star = ''
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        star += '*';
    }
    star += '\n';

} 
console.log(star)





// Tips pengerjaan ada di video berikut :
// [Looping](https://youtu.be/kyobpgoqx2c)

// [Materi Looping](../../study-materials/part5.md)