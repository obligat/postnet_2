/**
 * Created by dujinqiao on 16-7-29.
 */

const creatAction=require('./creatAction');
const coreCode2Num=require('./core/coreFunction/codeTurnNum');

module.exports=function () {
  return creatAction('barcode',`
        Please input barcode like | |::|: ::|:| ||::: :||:: |::|: :|:|: |
        
        1-init 2-numberToBarcode q-quit
        `.trim(),barcodeAction);  
};
// let currentActionName = 'init';
function barcodeAction(cmd) {
    switch (cmd) {
        case '1':
            return 'init';
        case '2':
            return 'number';
        case 'q':
            process.exit(0);
            return;
        default:
            console.log(coreCode2Num.codeTurnNum(cmd));
            return 'barcode'
    }
}