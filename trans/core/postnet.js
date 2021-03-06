






function isValueAll(input) {
    let bool = false;
    if (isValue(input)) {
        if (hasFrame(input)) {
            let noFrame = input.slice(1, -1);
            if (isFiveLength(noFrame)) {
                return bool = true;
            }
        }
    }
    return bool;
}
function isValue(input) {
    let bool = true;
    for (let i of input) {
        if (i !== '|' && i !== ' ' && i !== ':') {
            return bool = false;
        }
    }
    return bool;
}

function hasFrame(barcode) {
    let bool = false;
    let arr = barcode.split('');
    if (arr[0] === '|' && arr[1] === ' ' && arr[arr.length - 1] === '|' && arr[arr.length - 2] === ' ') {
        bool = true;
    }
    return bool;
}

function isFiveLength2(input) {
    let bool = true;
    let arr = input.split(' ');
    for (let i of arr) {
        if (i.length !== 5) {
            bool = false;
        }
    }
    return bool;
}

function isFiveLength(input) {
    return input.split(' ').filter((v, k, arr)=> {
        return k > 0 && k < arr.length - 1;
    }).every(v=>v.length === 5);
}






module.exports = {
    isValue1: isValue1,
    addACode: addACode,
    matchCode: matchCode,
    num2code: num2code,
    isValueAll: isValueAll,
    splitCode: splitCode,
    matchNum: matchNum,
    codeTurnNum: codeTurnNum
};
