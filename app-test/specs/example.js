/**
 * Created with JetBrains WebStorm.
 * User: Nghia
 * Date: 2/2/13
 * Time: 12:14 PM
 * To change this template use File | Settings | File Templates.
 */
describe("Basic Assumptions", function() {

    it("has ExtJS4 loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(4);
    });

    it("has loaded AM code",function(){
        expect(AM).toBeDefined();
    });
});

describe("Asynchronous specs", function() {
    var value, flag;

    it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
        var a, foo = "something";

        function multiply(x, y) {
            return x * y;
        };
        var divide = function func_name(x, y) {
            return x/y;
        };

        expect(multiply).toBeTruthy();


        var y = function x() {};

//        func_name = multiply;
//        multiply = divide;
//        expect(func_name(6,3)).toEqual(18);
//        expect(multiply(6,3)).toEqual(2);

        expect('function' == typeof func_name).toBeFalsy();
        expect('function' == typeof divide).toBeTruthy();
//        expect(x).toBeFalsy(); // ReferenceError
//        expect(func_name).toBeTruthy();  // ReferenceEror

        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("should support async execution of test preparation and exepectations", function() {

        runs(function() {
            flag = false;
            value = 0;
            console.info("1");

            setTimeout(function() {
                flag = true;
                console.info("2");
            }, 500);
        });

        waitsFor(function() {
            value++;
            console.info("value=" + value);
            console.info("flag=" + flag);
            return flag;
        }, "The Value should be incremented", 750);

        runs(function() {
            console.info("value2=" + value);
            expect(value).toBeGreaterThan(0);
        });
    });
});

