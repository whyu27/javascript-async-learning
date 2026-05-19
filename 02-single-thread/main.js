// Single Thread
// Single thread adalah sebuah program yang hanya dapat menjalankan satu proses dalam satu waktu / satu pekerjaan dieksekusi satu per satu secara berurutan.

// Kode dieksekusi secara berurutan 
console.log('A');
console.log('B'); // JavaScript tidak akan menjalankan B sebelum A selesai
console.log('C');


// Tapi JavaScript bisa nampak seperti multi thread (menjalankan banyak proses sekaligus)
console.log('Bakal muncul pertama');

setTimeout(() => {
    console.log('Ini sudah masuk memory proses tapi dijalankan setelah 3 detik ke depan');
},3000);

console.log('Bakal muncul kedua');


// 1. JavaScript menjalankan:
//    console.log('Bakal muncul pertama')

// 2. JavaScript membaca setTimeout(...)
//    setTimeout TIDAK langsung menjalankan isi function.
//    Browser hanya diminta untuk:
//    "Tolong jalankan function ini setelah 3 detik"

// 3. Karena timer berjalan di browser/Web API,
//    JavaScript tidak menunggu 3 detik selesai
//    JavaScript langsung lanjut ke kode berikutnya

// 4. Maka baris ini langsung dijalankan:
//    console.log('Bakal muncul kedua')
//    Output:
//    Bakal muncul kedua

// 5. Setelah 3 detik selesai,
//    function callback dipindahkan ke Callback Queue

//    Callback Queue = tempat antre function
//    yang siap dijalankan

// 6. Event Loop mengecek:
//    "Apakah Call Stack kosong?"

//    Jika masih ada kode yang berjalan:
//    callback harus menunggu

//    Jika kosong:
//    callback dipindahkan ke Call Stack
//    lalu dijalankan

// 7. Akhirnya tampil:
//    Output:
//    Muncul setelah 3 detik