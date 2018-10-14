var BigNumber = require('bignumber.js');
var run = require('./framework.js');

contract('TokenOne', function (accounts) {

    it("12. Checking approve and allowance", function (done) {
        run(accounts, done, {
            type:                "Tokenv1",
            reservePrice:        500,
            actions: [{ block: 1, action: "approve", sender: 0, receiver: 1, payment: 100, succeed: true, on_error: "Unable to approve" },
                { block: 2, action: "allowance", sender: 0,owner: 0, spender: 1, expectation: 100,succeed: true, on_error: "Unable to provide allowance" },
                { block: 3, action: "transferFrom", caller: 1, sender: 0, receiver: 2, payment: 50, succeed: true, on_error: "2nd Transfer Unsuccessful" },
                { block: 4, action: "balanceOf", sender: 0, owner: 0, expectation: 450, succeed: true, on_error: "2nd Transfer Unsuccessful" },],
        });
    });
});