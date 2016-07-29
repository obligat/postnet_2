/**
 * Created by dujinqiao on 16-7-29.
 */

const creatAction = require('./creatAction');

module.exports = function () {
    return creatAction('init', `
            welcome
        1-number to barcode
        2-barcode to number
        q-quit
        `.trim(), initAction);
};
// let currentActionName = 'init';

function initAction(cmd) {
    switch (cmd) {
        case '1':
            return  currentActionName='number';
        case '2':
            return currentActionName='barcode';
        case 'q':
            process.exit(0);
            return;
        default:
            console.log(`Error input!`);
            return   currentActionName='init'
    }
}