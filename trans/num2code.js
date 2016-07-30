/**
 * Created by dujinqiao on 16-7-29.
 */
const creatAction=require('./creatAction');
const coreNum2Code=require('./core/coreFunction/num2code');

function num2code() {
    return creatAction('number',`please input a number like 12345 or 123456789 or 12345-1234`.trim(),numberAction);
}

// let currentActionName = 'init';
function numberAction(cmd) {
    switch (cmd) {
        case '1':
            return 'init';
        case '2':
            return 'barcode';
        case 'q':
            process.exit(0);
            return;
        default:
            console.log(coreNum2Code.num2code(cmd));
            return 'number'
    }
}

module.exports=num2code;
