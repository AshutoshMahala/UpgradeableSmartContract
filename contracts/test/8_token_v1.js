var BigNumber = require('bignumber.js');
var run = require('./framework.js');

contract('TokenOne', function (accounts) {

    it("8. Continuous Transactions", function (done) {
        run(accounts, done, {
            type:                "Tokenv1",
            reservePrice:        500,
            actions: [{ block: 1, action: "transfer", sender: 0, receiver: 1, payment: 100, succeed: true, on_error: "1st Transaction Unsuccessful" },
                { block: 2, action: "transfer", sender: 1, receiver: 2, payment: 50, succeed: true, on_error: "2nd Transfer Unsuccessful" },],
        });
    });

});