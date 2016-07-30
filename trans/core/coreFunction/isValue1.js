/**
 * Created by dujinqiao on 16-7-30.
 */

class isValue1{
    static isValueNum(input) {
        return /^\d{5}(-?\d{4})?$/.test(input);
    }

}

module.exports=isValue1;
