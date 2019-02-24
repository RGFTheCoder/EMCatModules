module.exports.sin = function sin(x) {
    let iterNum = 2 ** 3;
    let mxx = -(x ** 2);
    let sin = 1;
    let n = 0;
    let term = 1;
    for (let i = 1; i <= 2 * iterNum; i++) {
        n = n + 2;
        term = term * mxx / (n * (n + 1));
        sin = sin + term
    }
    sin = x * sin;
    return sin;
}

module.exports.cos = function cos(x) {
    let iterNum = 2 ** 3;
    let mxx = -(x ** 2);
    let sin = 1;
    let n = 1;
    let term = 1;
    for (let i = 1; i <= 2 * iterNum; i++) {
        n = n + 2;
        term = term * mxx / (n * (n + 1));
        sin = sin + term
    }
    sin = x * sin;
    return sin;
}