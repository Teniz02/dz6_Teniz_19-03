function multiplyNumeric(obj) {

    for (let prop in obj) {
        if (isNumber(obj[prop])) {
            obj[prop] **=2;
        }
    }

}

function isNumber(value) {
    return isFinite(value);
}


const obj = {
    width: 200,
    height: 300,
    title: "My block"
};

multiplyNumeric(obj);

console.log(obj);