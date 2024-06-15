const checkFive = require('../checkFive.js');

describe("checkFive", function () {

    test("Should print that number is less than 5 for numbers < 5", function () {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });

    test("Should print that number is greater than 5 for numbers > 5", function () {
        let output = checkFive(6);
        expect(output).toEqual("6 is greater than 5.");
    });

    test("Should print that number is equal to 5 for number = 5", function () {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
});