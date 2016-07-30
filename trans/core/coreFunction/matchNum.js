/**
 * Created by dujinqiao on 16-7-30.
 */
    
    const loadAllCode=require('./loadAllCodes');
    
class matchNum{
    static matchNum(splitedCodes) {
    let allCodes = loadAllCode.loadAllCodes();
    let matchedNum = '';

    matchedNum = splitedCodes.map((a)=> {
        if (allCodes.includes(a)) {
            return allCodes.indexOf(a);
        }
    });

    return matchedNum.join('');
}

}

module.exports=matchNum;