/**
 * Created by dujinqiao on 16-7-30.
 */
    const isValueAll=require('./isValueAll');
    const splitCode=require('./splitCode');
    const matchNum=require('./matchNum');
    
class codeTurnNum{
    static codeTurnNum(barcode) {
    if(isValueAll.isValueAll(barcode)){
        let splitedCodes = splitCode.splitCode(barcode);
        let nums = matchNum.matchNum(splitedCodes);
        let text = '';

        if (nums.length === 6) {
            text += 'Validation Check:       ' + barcode + '   ==   ' + parseInt(nums.slice(0, -1)) + '\n' + 'cd is ' + nums.slice(-1);
        }
        else if (nums.length === 10) {
            text += 'Validation Check:       ' + barcode + '   ==   ' + nums.slice(0, 5) + '-' + nums.slice(5, 9) + '\n' + 'cd is ' + nums.slice(-1);

        }
        return text;
    }

}

}

module.exports=codeTurnNum;