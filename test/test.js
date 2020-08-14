const assert = require('chai').assert
const app = require('../jack');

describe('App', function () {
    it("app should return hello", function () {
        let result = app.sayHello()
        assert.equal(result, "hello")
    })
})