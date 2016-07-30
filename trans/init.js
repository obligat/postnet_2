/**
 * Created by dujinqiao on 16-7-29.
 */

const creatAction = require('./creatAction');
// const  initAction=require('./initClass');

    function initView () {
        return creatAction('init', `
            welcome
        1-number to barcode
        2-barcode to number
        q-quit
        `.trim(), initAction);


}

function initAction(cmd) {
    switch (cmd) {
        case '1':
            return 'number';
        case '2':
            return 'barcode';
        case 'q':
            process.exit(0);
            return;
        default:
            console.log(`Error input!`);
            return   'init'
    }

}
// let currentActionName = 'init';


module.exports = initView;