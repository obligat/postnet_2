/**
 * Created by dujinqiao on 16-7-29.
 */
const creatAction=require('./creatAction');
const postnet=require('./core/postnet');

module.exports=function () {
  return creatAction('number',`
        Please input barcode like :| |::|: ::|:| ||::: :||:: |::|: :|:|: |
        
        1-init 2-numberToBarcode q-quit
        `.trim(),numberAction);  
};
// let currentActionName = 'init';
function numberAction(cmd) {
    switch (cmd) {
        case '1':
            return currentActionName='init';
        case '2':
            return currentActionName='barcode';
        case 'q':
            process.exit(0);
            return;
        default:
            console.log(postnet.num2code(cmd));
            return currentActionName='number'
    }
}