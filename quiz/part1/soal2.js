
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
switch (bulan) {
    case 1:
      console.log("januari");
      break;
    case 2:
      console.log("februari");
      break;
    case 3:
      console.log("maret");
      break;
    case 4:
      console.log("april");
      break;
    case 5:
      console.log("mei");
      break;
    case 6:
      console.log("juni");
      break;
    case 7:
      console.log("juli");
      break;
    case 8:
      console.log("agustus");
      break;
    case 9:
      console.log("semptember");
      break;
    case 10:
      console.log("oktober");
      break;
    case 11:
      console.log("november");
      break;
    case 12:
      console.log("desember");
      break;
    default:
      console.log("bulan tidak ada");
  
    
  }
  console.log(hari , bulan , tahun)
  
  //soal selesai