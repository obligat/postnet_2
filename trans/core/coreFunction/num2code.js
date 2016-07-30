/**
 * Created by dujinqiao on 16-7-30.
 */
    const isValue1=require('./isValue1.js');
    const matchCode=require('./matchCode');
    const add=require('./addACode');

    
class num2code{
    static num2code(input) {
    if(isValue1.isValueNum(input)){
        let barcodes = matchCode.matchCode(add.addACode(input));
        let text = 'Validation Check:       ' + input + '   ==   |' + barcodes.join("") + '|' + '\n' + 'cd is ' + add.addACode(input).slice(-1);
        return text;
    }

}

}

module.exports=num2code;