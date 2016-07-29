/**
 * Created by dujinqiao on 16-7-29.
 */

'use strict';
const call=require('../../trans/core/postnet');

const init=require('../../trans/init');
const num2code=require('../../trans/num2code');
const code2num=require('../../trans/codeTurnNum');


describe("judge if value number",function () {
    it("should return true when users' input if 5 digit string",function () {
        let input='32343';
        let result=call.isValueNum(input);
        expect(result).toEqual(true);
    }) ;

    it("should return true when users' input if 9 digit string",function () {
        let input='323434444';
        let result=call.isValueNum(input);
        expect(result).toEqual(true);
    }) ;

    it("should return true when users' input if 10 digit string",function () {
        let input='32343-4444';
        let result=call.isValueNum(input);
        expect(result).toEqual(true);
    }) ;

    it("should return false when users' input other thing",function () {
        let input='rrrr';
        let result=call.isValueNum(input);
        expect(result).toEqual(false);
    }) ;
});

describe("calculate addACode code", function () {
    it("should get string with a verified code", function () {
        let input = '23414';
        let result = call.addACode(input);
        expect(result).toEqual('234146');
    });

    it("should get string with a verified code", function () {
        let input = '111111111';
        let result = call.addACode(input);
        expect(result).toEqual('1111111111');
    });

    it("should get string with a verified code", function () {
        let input = '11111-1111';
        let result = call.addACode(input);
        expect(result).toEqual('1111111111');
    });
});






describe("judge if value number",function () {
    it("should return true when users' input if 5 digit string",function () {
        let input='32343';
        let result=call.isValueNum(input);
        expect(result).toEqual(true);
    }) ;

    it("should return true when users' input if 9 digit string",function () {
        let input='323434444';
        let result=call.isValueNum(input);
        expect(result).toEqual(true);
    }) ;

    it("should return true when users' input if 10 digit string",function () {
        let input='32343-4444';
        let result=call.isValueNum(input);
        expect(result).toEqual(true);
    }) ;

    it("should return false when users' input other thing",function () {
        let input='rrrr';
        let result=call.isValueNum(input);
        expect(result).toEqual(false);
    }) ;
});

describe("calculate addACode code", function () {
    it("should get string with a verified code", function () {
        let input = '23414';
        let result = call.addACode(input);
        expect(result).toEqual('234146');
    });
});

describe("match code", function () {
    it("should match number to barcode", function () {
        let verifiedNum = '63097';
        let result = call.matchCode(verifiedNum);
        let expected = [':||::', '::||:', '||:::', '|:|::', '|:::|'];
        expect(result).toEqual(expected);
    })
});

describe("numTurnCode", function () {
    it("should put out ", function () {
        let input = '63097';
        let result = call.num2code(input);
        let expeced = 'Validation Check:       ' + 63097 + '   ==   |:||::::||:||:::|:|::|:::|:|:|:|' + '\n' + 'cd is ' + 5;
        expect(result).toEqual(expeced);
    })
});


describe("judge if correct", function () {
    it("alert prompt infomation", function () {
        let input = '| ||::: ::||: ||::: |:|:: |:::| |';
        let result = call.isValueAll(input);
        expect(result).toEqual(true);
    });

    it("alert prompt infomation", function () {
        let input = '| ||::: ::||: ||::: |:|:: |:::| ||:::';
        let result = call.isValueAll(input);
        expect(result).toEqual(false);
    });

    it("alert prompt infomation", function () {
        let input = '| ||::: ::||: ||::: |:|:: |:::| 88 |';
        let result = call.isValueAll(input);
        expect(result).toEqual(false);
    });

});

describe("split code ", function () {
    it("should split code by ' '", function () {
        let barcode = '| ||::: ::||: ||::: |:|:: |:::| |';
        let result = call.splitCode(barcode);
        let expected = ['||:::', '::||:', '||:::', '|:|::', '|:::|'];
        expect(result).toEqual(expected);
    })
});

describe("matchNum", function () {
    it("should match ||::: ..to 0..", function () {
        let splitedCodes = [':||::', '::||:', '||:::', '|:|::', '|:::|'];
        let result = call.matchNum(splitedCodes);
        let expected = '63097';
        expect(result).toEqual(expected);
    })
});

describe("code to number", function () {
    it("should input barcode output number", function () {
        let barcode = '| |:|:: ::||: ||::: |:|:: |:::| :|:|: |';
        let result = call.codeTurnNum(barcode);
        let expected = 'Validation Check:       ' + '| |:|:: ::||: ||::: |:|:: |:::| :|:|: |   ==   ' + 93097 + '\n' + 'cd is ' + 5;
        expect(result).toEqual(expected);
    });

});



describe("init",function () {
   it('should init info',function () {
       let input='1';
       let result=init().doAction(input);
       expect(result).toEqual('number');
   });
    it('should init info',function () {
        let input='2';
        let result=init().doAction(input);
        expect(result).toEqual('barcode');
    });
    it('should init info',function () {
        let input='q';
        let result=init().doAction(input);
        expect(result).toEqual('quit');
    });
    it('should init info',function () {
        let input='3';
        let result=init().doAction(input);
        expect(result).toEqual(`Error input!`);
    })

});

describe('num2code',function () {
    it('should num to code ',function () {
        let result=num2code().doAction('1');
        expect(result).toEqual('init');
    });

    it('should num to code ',function () {
        let result=num2code().doAction('2');
        expect(result).toEqual('barcode');
    });

    it('should num to code ',function () {
        let result=num2code().doAction('q');
        expect(result).toEqual('quit');
    });

    it('should num to code ',function () {
        let result=num2code().doAction('123456789');
        expect(result).toEqual('Validation Check:       123456789   ==   |:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|\n'+
        'cd is 5');
    });

    it('should num to code ',function () {
        let result=num2code().doAction('1eew');
        expect(result).toEqual('undefined');
    });

});


describe('code2num',function () {
    it('should code2num info',function () {
        let input='1';
        let result=code2num().doAction(input);
        expect(result).toEqual('number');
    });
    it('should code2num info',function () {
        let input='2';
        let result=code2num().doAction(input);
        expect(result).toEqual('number');
    });
    it('should code2num info',function () {
        let input='q';
        let result=code2num().doAction(input);
        expect(result).toEqual('number');
    });
    it('should code2num info',function () {
        let input='| |::|: |:::| ::||: :::|| :||:: ::|:| |    55';
        let result=code2num().doAction(input);
        expect(result).toEqual('undefined');
    });
    it('should code2num info',function () {
        let input='| ::||: ::|:| ::|:| ::||: ::|:| |::|: |';
        let result=code2num().doAction(input);
        expect(result).toEqual('Validation Check:       | ::||: ::|:| ::|:| ::||: ::|:| |::|: |   ==   32232'+
        'cd is 8');
    });

});