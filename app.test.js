const assert = require("assert");
const {add, subtract} = require("./app");


describe("add()", () => {

    test("First test: add(4,6) is equal to 10", () => {
        const actual = add(4, 6);
        const expectation = 10;
        // assert.equal(actual, expectation);

        expect(actual).toBe(expectation);
    });

    test("second test: add() with no args thros an error", () => {
        assert.throws(() => {
            add();
        });
    });
});

describe("subtract()", () => {
    test("first subtract test", () => {
        const actual = subtract(6,4);
        const expectation = 2;
        expect(actual).toBe(expectation);
    });
});
 


// if (actual !== expectation) {
//     throw "add() did not return 10 when given 4 and 6";
// }
