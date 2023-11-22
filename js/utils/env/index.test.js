const { isInTestEnv } = require("./index.js");

describe("Test fonction isInTestEnv", () => {

    it("return true", () => {
        expect(isInTestEnv()).toBe(true)

    });

    it("return false", () => {
        process.env.NODE_ENV = 'no test'
        expect(isInTestEnv()).toBe(false)

    });

});

