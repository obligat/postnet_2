/**
 * Created by dujinqiao on 16-7-29.
 */

'use strict';

const postnet = require('./core/postnet');
const init = require('./init');
const num2code = require('./num2code');
const codeTurnNum = require('./codeTurnNum');


let currentActionName = 'init';

/*
 const actions = [
 {
 name: 'init',
 help: `
 welcome
 1-number to barcode
 2-barcode to number
 q-quit
 `.trim(),
 doAction(cmd){
 switch (cmd) {
 case '1':
 return currentActionName='number';
 case '2':
 return currentActionName='barcode';
 case 'q':
 process.exit(0);
 return;
 default:
 console.log(`Error input!`);
 return currentActionName='init'
 }
 }
 }, {
 name: 'number',
 help: `
 Please input number like : 12345 or 123456789 or 12345-56789

 1-init 2-barcodeToNumber q-quit
 `.trim(),
 doAction(cmd){
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
 }, {
 name: 'barcode',
 help: `
 Please input barcode like :| |::|: ::|:| ||::: :||:: |::|: :|:|: |

 1-init 2-numberToBarcode q-quit
 `.trim(),
 doAction(cmd){
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
 }
 ];
 */
let actions = [
    init(),
    num2code(),
    codeTurnNum()
];


const router = {
    handle(cmd){
        actions.find(v=>v.name === currentActionName).doAction(cmd);
    },
    start(){
        console.log(actions.find(v=>v.name === currentActionName).help);
    }
};

/*
 function switchRouter() {
 let result=router.handle(cmd);
 let newRouter=actions.find(v=>v.name===result);

 currentActionName=newRouter.name;

 }
 */

module.exports = router;


