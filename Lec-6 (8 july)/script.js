const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("PROMISE RESOLVED");
    }, 3000);
});

promise1
    .then((res) => console.log(res))
    .then(() =>
        setTimeout(() => {
            console.log("P2");
        }, 2000)
    )
    .then(() =>
        setTimeout(() => {
            console.log("P3");
        }, 4000)
    )
    .then(() =>
        setTimeout(() => {
            console.log("P4");
        }, 3000)
    )
    .catch((err) => console.log(err));