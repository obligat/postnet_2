/**
 * Created by dujinqiao on 16-7-29.
 */

const creatAction=require('./creatAction');
const postnet=require('./core/postnet');

module.exports=function () {
  return creatAction('barcode',`
        Please input barcode like :| |::|: ::|:| ||::: :||:: |::|: :|:|: |
        
        1-init 2-numberToBarcode q-quit
        `.trim(),barcodeAction);  
};
// let currentActionName = 'init';
function barcodeAction(cmd) {
    switch (cmd) {
        case '1':
            return currentActionName='init';
        case '2':
            return currentActionName='number';
        case 'q':
            process.exit(0);
            return;
        default:
            console.log(postnet.codeTurnNum(cmd));
            return currentActionName='barcode'
    }
}