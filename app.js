function add(x, y) {
    if (!x || !y) {
        throw "both arguments are required";
    }
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

module.exports = {
    add,
    subtract
}