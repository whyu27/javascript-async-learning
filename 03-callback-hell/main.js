// Callback Hell
// Callback hell adalah kondisi ketika callback function ditulis secara bertingkat (nested) terlalu dalam,
// sehingga kode menjadi sulit dibaca, sulit dipahami, dan sulit dikelola (maintenance).

// Contoh callback hell:

setTimeout(function() {
     console.log("Step 1: Start");

    setTimeout(function() {
        console.log("Step 2: Process data");

        setTimeout(function() {
            console.log("Step 3: Validate data");

            setTimeout(function() {
                 console.log("Step 4: Save data");

                setTimeout(function() {
                    console.log("Step 5: Finish");
                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);