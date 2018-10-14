var BigNumber = require('bignumber.js');
var run = require('./framework.js');

contract('TokenOne', function (accounts) {

    it("1. creates a Token version 1", function (done) {
        run(accounts, done, {
            type:                "Tokenv1",
            reservePrice:        500,
            actions: [],
        });
    });

});