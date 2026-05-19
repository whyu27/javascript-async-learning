// Promise
// Promise adalah objek yang merepresentasikan hasil dari proses asynchronous di masa depan.
// Versi gampangnya:
// Promise = “janji” bahwa nanti akan ada hasil entah berhasil atau gagal


// Contoh sederhana: 
// Callback version
// const requestData = (success, failure) => {
//     const random = Math.floor(Math.random() * 2000) + 500;
//     const isSuccess = random < 1000 ? true : false;

//     setTimeout(() => {
//         if (isSuccess) {
//             success(`Success get data from database (${random}ms)`);
//         }
//         else {
//             failure(`Failed to get data from database (${random}ms)`);
//         }
//     }, random);
// }

// requestData(
//     function (response) {
//         console.log(response);

//         requestData(
//             function (response) {
//                 console.log(response);

//                 requestData(
//                     function (response) {
//                         console.log(response);

//                         requestData(
//                             function (response) {
//                                 console.log(response);
//                             },
//                             function (error) {
//                                 console.log(error);
//                             }
//                         );
//                     },
//                     function (error) {
//                         console.log(error);
//                     }
//                 );
//             },
//             function (error) {
//                 console.log(error);
//             }
//         );
//     },
//     function (error) {
//         console.log(error);
//     }
// );


// Promise version
// const requestData = new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random() * 2000) + 500;
//     const isSuccess = random < 1500? true : false;

//     setTimeout(() => {
//         if(isSuccess){
//             resolve(`Success get data from database (${random}ms)`);
//         }
//         else{
//             reject(`Failed to get data from database (${random}ms)`);
//         }
//     }, random);
// });

// requestData
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//Callback version
// function requestCallback(url, success, failure) {
//     const delay = Math.floor(Math.random() * 4500) + 500;

//     setTimeout(() => {
//         if (delay > 3000) {
//             failure(`Error: Connection Timeout (${delay}ms)`);
//         } else {
//             success(`Success: ${url} (${delay}ms)`);
//         }
//     }, delay);
// }


// requestCallback(
//     `google.com`,

//     function (response) {
//         console.log(response);

//         requestCallback(
//             `youtube.com`,

//             function (response) {
//                 console.log(response);

//                 requestCallback(
//                     `spotify.com`,

//                     function (response) {
//                         console.log(response);

//                         requestCallback(
//                             `github.com`,

//                             function (response) {
//                                 console.log(response);

//                                 requestCallback(
//                                     `javascipt.info`,

//                                     function (response) {
//                                         console.log(response);
//                                     },

//                                     function (error) {
//                                         console.log(error);
//                                     }
//                                 );
//                             },

//                             function (error) {
//                                 console.log(error);
//                             }
//                         );
//                     },

//                     function (error) {
//                         console.log(error);
//                     }
//                 );
//             },

//             function (error) {
//                 console.log(error);
//             },
//         );
//     },

//     function (error) {
//         console.log(error);
//     },
// );


// Promise version
const requestPromise = (url) => {
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

requestPromise(`google.com`)
    .then((response) => {
        console.log(`Page 1`);
        console.log(response);
        return requestPromise(`youtube.com`);
    })
    .then((response) => {
        console.log(`Page 2`);
        console.log(response);
        return requestPromise(`spotify.com`);
    })
    .then((response) => {
        console.log(`Page 3`);
        console.log(response);
        return requestPromise(`github.com`);
    })
    .then((response) => {
        console.log(`Page 4`);
        console.log(response);
        return requestPromise(`javascript.info`);
    })
    .catch((error) => {
        console.log(error);
    });