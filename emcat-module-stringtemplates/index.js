module.exports.t = module.exports.template = function (input) {
    input = input[0];

    return function parse(valObjs) {
        let out = input;
        for (let i in valObjs) {
            out = out.replace("%" + i, valObjs[i]);
        }
    }
}