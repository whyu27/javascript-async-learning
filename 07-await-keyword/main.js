// Await Keyword
// Keywoard await hanya bisa digunakan dalam function dengan async
// Await akan melakukan jeda prosess selanjutnya didalam function, menunggu promise yang dijalankan resolved
// Sederhananya : await = “tunggu dulu sampai hasil Promise selesai”

// Contoh 1 Mengambil user dari data lokal (array)
// const getData = async (id) => {
//     const users = [
//         { id: 1, username: 'Wahyu', pass: 'Wahyu123' },
//         { id: 2, username: 'Budi', pass: 'Budi123' },
//         { id: 3, username: 'Andi', pass: 'Andi123' }
//     ];

//     const foundUser = users.find(p => p.id === id);

//     if (!foundUser) {
//         throw 'User not found';
//     }

//     return foundUser;
// }

// const main = async () => {
//     const result = await getData(2);
//     console.log(result);
// }

// main();


// Contoh 2 Mengambil data user dari API (jsonplaceholder)
const fetchUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();

    return data;
}

const main = async () => {
    console.log('Fetching data...');

    const user = await fetchUser(7);

    console.log('user: ', user);

    console.log('Fetching data selesai');
}

main();