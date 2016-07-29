
'use strice';

const repl=require('repl');
const router=require('./router');

router.start();

var replSever=repl.start({prompt:'>',eval:handleInput});

function handleInput(cmd,context,filename,callback) {
    
    router.handle(cmd.trim());
    router.start();
    callback();
}

module.exports=handleInput;