// Async Keywoard
// Fungsi async akan otomatis menjadi promise
// Jika fungsinya punya data, maka resolve-nya akan mengirimkan data juga yang bisa diolah
// Jika di dalam function ada object error maka akan menjalankan bagian reject


// Contoh menggunakan promise
// const sapa = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Berhasil');
//         reject('Gagal');
//     })
// }

// sapa()
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// Contoh menggunakan async
// const hello = async () => {
//     return 'Hallo dari async'; //ini menjadi resolve
//     throw 'Terjadi error'; //ini menjadi reject
// }

// console.log('Start');

// hello()
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// console.log('End');

// Aync untuk mendapatkan data
// const getUser = async () => {
//     return {
//         id : 1,
//         name : 'Wahyu',
//         age : 20
//     }
// }

// console.log('Fetching data...');

// getUser()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// Async untuk fetch product
const fetchProduct = async(id) => {
    const products = [
        {id: 1, name : 'Laptop'},
        {id: 2, name : 'Keyboard'},
        {id: 3, name : 'Mouse'}
    ];

        const product = products.find(p => p.id === id)

    if(!product){
        throw'Product not found';
    }

    return product;

}   

    fetchProduct(1)
        .then(res => {
            console.log("Success:", res)
            return fetchProduct(2)
        })
        .then(res => {
            console.log("Success 2:", res)
            return fetchProduct(5)
        })
        .catch(err => console.log("Error:", err))