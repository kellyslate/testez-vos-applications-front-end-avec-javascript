import { data } from '../../../../data/mock-homepage-data.js'

const { retrieveSensorsData } = require("./index.js");

describe("Test fonction retrieveSensorsData", () => {

    it("return data", () => {
        expect(retrieveSensorsData()).toBe(data.facades)

    });

});
