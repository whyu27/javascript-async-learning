// CALL STACK (Tumpukan Pemanggilan Fungsi)
// Call stack adalah tempat JavaScript menyimpan urutan fungsi yang sedang dipanggil.
// Prinsipnya: LIFO (Last In, First Out)
// Artinya: fungsi yang terakhir dipanggil akan dieksekusi dan selesai lebih dulu.

function satu(){
    console.log('Fungsi satu mulai');

    dua(); // memanggil fungsi dua, masuk ke call stack di atas fungsi satu

    console.log('Fungsi satu selesai');
}

function dua(){
    console.log('Fungsi dua mulai');

    tiga(); // memanggil fungsi tiga, masuk ke call stack di atas fungsi dua

    console.log('Fungsi dua selesai');
}

function tiga(){
    console.log('Fungsi tiga dijalankan');
    // fungsi ini paling dalam, jadi selesai duluan
}

satu();

/*
URUTAN CALL STACK:

1. satu() dipanggil → masuk stack
   Stack: [satu]

2. dua() dipanggil dari satu() → masuk stack
   Stack: [satu, dua]

3. tiga() dipanggil dari dua() → masuk stack
   Stack: [satu, dua, tiga]

4. tiga() selesai → keluar dari stack
   Stack: [satu, dua]

5. dua() selesai → keluar dari stack
   Stack: [satu]

6. satu() selesai → keluar dari stack
   Stack: []

HASIL OUTPUT:
- Fungsi satu mulai
- Fungsi dua mulai
- Fungsi tiga dijalankan
- Fungsi dua selesai
- Fungsi satu selesai
*/


// Function untuk menghitung pythagoras
// Fungsi paling dasar untuk perkalian
const perkalian = (x, y) => {
    return x * y;
};

// Fungsi kuadrat, memanggil fungsi perkalian
const kuadrat = (x) => {
    return perkalian(x, x);
};

// Fungsi utama pythagoras
function pythagoras(a, b, c) {
    return kuadrat(a) + kuadrat(b) === kuadrat(c);
}


// Memanggil fungsi utama
const hitung = pythagoras(3, 4, 5);
console.log(hitung);


/*
URUTAN CALL STACK:

1. pythagoras(3,4,5) dipanggil → masuk stack
   Stack: [pythagoras]

2. kuadrat(3) dipanggil dari pythagoras → masuk stack
   Stack: [pythagoras, kuadrat]

3. perkalian(3,3) dipanggil dari kuadrat → masuk stack
   Stack: [pythagoras, kuadrat, perkalian]

4. perkalian selesai → keluar dari stack
   Stack: [pythagoras, kuadrat]

5. kuadrat(3) selesai → keluar dari stack
   Stack: [pythagoras]

6. kuadrat(4) dipanggil → masuk stack
   Stack: [pythagoras, kuadrat]

7. perkalian(4,4) dipanggil → masuk stack
   Stack: [pythagoras, kuadrat, perkalian]

8. perkalian selesai → keluar dari stack
   Stack: [pythagoras, kuadrat]

9. kuadrat(4) selesai → keluar dari stack
   Stack: [pythagoras]

10. kuadrat(5) dipanggil → masuk stack
    Stack: [pythagoras, kuadrat, perkalian]

11. perkalian(5,5) dipanggil → masuk stack
    Stack: [pythagoras, kuadrat, perkalian]

12. perkalian selesai → keluar dari stack
    Stack: [pythagoras, kuadrat]

13. kuadrat(5) selesai → keluar dari stack
    Stack: [pythagoras]

14. pythagoras selesai → keluar dari stack
    Stack: []

HASIL OUTPUT:
true
*/