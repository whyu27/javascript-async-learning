const backgroundChanger = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(color);
        }, delay);
    })
}

backgroundChanger(`red`, 1000)
    .then((color) => {
        console.log("Now:", color);
        return backgroundChanger(`yellow`, 1000);
    })
    .then((color) => {
        console.log("Now:", color);
        return backgroundChanger(`green`, 1000);
    })
    .then((color) => {
        console.log("Now:", color);
        return backgroundChanger(`blue`, 1000);
    })
    .then((color) => {
        console.log("Now:", color);
        return backgroundChanger(`violet`, 1000);
    })
    .then((color) => {
        console.log("Now:", color);
        return backgroundChanger(`gray`, 1000);
    })
    .then((color) => {
        console.log("Now:", color);
        return backgroundChanger(`black`, 1000);
    })
     .catch((err) => {
        console.log("Error:", err);
    });