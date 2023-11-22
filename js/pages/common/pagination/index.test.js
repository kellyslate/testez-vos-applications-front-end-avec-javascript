const { default: Pagination } = require("./index.js");

describe("Test fonction pagination", () => {

    it("return something", () => {
        expect(Pagination.getNumberOfPages()).toBeDefined()

    });

    it("return 0 page", () => {
        expect(Pagination.getNumberOfPages(0)).toBe(0)

    });

    it("return 0 page", () => {
        expect(Pagination.getNumberOfPages(0)).toBe(0)

    });

    it("return 1 page", () => {
        expect(Pagination.getNumberOfPages(7)).toBe(1)

    });

    it("return 1 page", () => {
        expect(Pagination.getNumberOfPages(34)).toBe(5)

    });

});