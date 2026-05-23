// Trt And Catch
// try/catch adalah fitur di JavaScript yang digunakan untuk menangani error (kesalahan) agar program tidak langsung berhenti saat terjadi masalah.
// try → bagian kode yang “dicoba dijalankan”
// catch → bagian yang akan menangkap error jika terjadi kegagalan di try
// Biasanya digunakan bersama async/await untuk menangani Promise yang gagal (reject).

const requestHandler = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;

        setTimeout(() => {
            if (delay > 3000) {
                reject(`Error: Connection Timeout (${delay}ms)`);
            } else {
                resolve(`Success: ${url} (${delay}ms)`);
            }
        }, delay);
    })
}

const main = async () => {
    try{
        console.log('Loading...')
        const result = await requestHandler('javascript.info');
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

main();