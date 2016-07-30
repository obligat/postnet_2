/**
 * Created by dujinqiao on 16-7-30.
 */

const loadAllCode=require('./loadAllCodes');

    
class matchCode{
    static matchCode(verifiedNum) {
    let barcodes = [];
    let allCodes = loadAllCode.loadAllCodes();
    let arr = verifiedNum.split('');
    barcodes = arr.map((a)=>allCodes[a]);
    return barcodes;
}

}

module.exports=matchCode;