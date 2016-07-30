/**
 * Created by dujinqiao on 16-7-30.
 */
class isValueAll{
    static isValueAll(input) {
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

function isFiveLength(input) {
    return input.split(' ').filter((v, k, arr)=> {
        return k > 0 && k < arr.length - 1;
    }).every(v=>v.length === 5);
}


module.exports=isValueAll;