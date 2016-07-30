/**
 * Created by dujinqiao on 16-7-30.
 */
class add{
    static addACode(input){
        let verifiedNum = [];
        let cd = 0;
        let splitInput = input.split("");
        let sum = splitInput.reduce(function (a, b) {
            if (b !== '-') {
                a = parseInt(a) + parseInt(b);
            }
            return a;
        });
        verifiedNum = input.replace('-', '');
        if (sum % 10 === 0) {
            verifiedNum += '0';
        }
        else {
            cd = (10 - sum % 10).toString();
            verifiedNum += cd;
        }
        return verifiedNum;
    }
}

module.exports=add;