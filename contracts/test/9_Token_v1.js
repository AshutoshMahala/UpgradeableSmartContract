var TokenOne = artifacts.require("./TokenOne.sol");

contract('TokenOne', function(accounts) {

    it("9. should put 10000 TokenOne in the first account", function() {

        return TokenOne.new(500, {from: accounts[0]}).then(function(instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 500, "10000 wasn't in the first account");
        });
    });

    // it("should send coin correctly", function() {
    //     var meta;
    //
    //     // Get initial balances of first and second account.
    //     var account_one = accounts[0];
    //     var account_two = accounts[1];
    //
    //     var account_one_starting_balance;
    //     var account_two_starting_balance;
    //     var account_one_ending_balance;
    //     var account_two_ending_balance;
    //
    //     var amount = 10;
    //
    //     return TokenOne.deployed().then(function(instance) {
    //         meta = instance;
    //         return meta.getBalance.call(account_one);
    //     }).then(function(balance) {
    //         account_one_starting_balance = balance.toNumber();
    //         return meta.getBalance.call(account_two);
    //     }).then(function(balance) {
    //         account_two_starting_balance = balance.toNumber();
    //         return meta.sendCoin(account_two, amount, {from: account_one});
    //     }).then(function() {
    //         return meta.getBalance.call(account_one);
    //     }).then(function(balance) {
    //         account_one_ending_balance = balance.toNumber();
    //         return meta.getBalance.call(account_two);
    //     }).then(function(balance) {
    //         account_two_ending_balance = balance.toNumber();
    //
    //         assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
    //         assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    //     });
    // });
    //
    // it("should allow owner to mint coins", function() {
    //     //call the mint function on behalf of the owner and check that owner's account balance increased correctly
    //     var meta;
    //
    //     var account_one = accounts[0];
    //
    //     var account_one_starting_balance;
    //     var account_one_ending_balance;
    //
    //     var amount = 200;
    //
    //     return MetaCoin.deployed().then(function(instance) {
    //         meta = instance;
    //         return meta.getBalance.call(account_one);
    //     }).then(function(balance) {
    //         account_one_starting_balance = balance.toNumber();
    //         return meta.mint(amount);
    //     }).then(function() {
    //         return meta.getBalance.call(account_one);
    //     }).then(function(balance) {
    //         account_one_ending_balance = balance.toNumber();
    //
    //         assert.equal(account_one_starting_balance, account_one_ending_balance - amount, "Amount wasn't correctly minted to the owner");
    //     });
    // });
    //
    // it("should not allow a non-owner address to mint coins", function() {
    //     var meta;
    //
    //     var account_two = accounts[1];
    //
    //     var account_two_starting_balance;
    //     var account_two_ending_balance;
    //
    //     var amount = 200;
    //
    //     return MetaCoin.deployed().then(function(instance) {
    //         meta = instance;
    //         return meta.getBalance.call(account_two);
    //     }).then(function(balance) {
    //         account_two_starting_balance = balance.toNumber();
    //         return meta.mint(amount,{from:account_two});
    //     }).then(function() {
    //         return meta.getBalance.call(account_two);
    //     }).then(function(balance) {
    //         account_two_ending_balance = balance.toNumber();
    //
    //         //call the mint function on behalf of a non-owner address and check that the non-owner address balance stays the same
    //         assert.equal(account_two_starting_balance, account_two_ending_balance, "Non-owner allowed to mint coins");
    //     });
    // });
    //
    //
    //
    // it("should put 5000 MetaCoin in the shared account", function() {
    //
    //     return MetaCoin.deployed().then(function(instance) {
    //         return instance.getSharedBalance.call(accounts[0]);
    //     }).then(function(sharedBalance) {
    //         assert.equal(sharedBalance.valueOf(), 5000, "5000 wasn't in the shared account");
    //     });
    // });
    //
    // it("should allow owner address to share coins", function() {
    //     var meta;
    //
    //     var account_one = accounts[0];
    //     var account_two = accounts[1];
    //
    //     var account_one_starting_balance;
    //     var account_one_ending_balance;
    //
    //     var amount = 600;
    //
    //     return MetaCoin.deployed().then(function(instance) {
    //         meta = instance;
    //         return meta.getSharedBalance.call(account_one);
    //     }).then(function(sharedBalance) {
    //         account_one_starting_balance = sharedBalance.toNumber();
    //         return meta.shareLocker(account_two, amount);
    //     }).then(function() {
    //         return meta.getSharedBalance.call(account_one);
    //     }).then(function(sharedBalance) {
    //         account_one_ending_balance = sharedBalance.toNumber();
    //
    //         assert.equal(account_one_starting_balance, account_one_ending_balance - amount, "Amount wasn't correctly shared by the owner");
    //     });
    // });
    //
    // it("Owner should be allowed to withdraw money from shared balance", function() {
    //     var meta;
    //
    //     var account_one = accounts[0];
    //     var account_two = accounts[1];
    //
    //     var account_one_starting_balance;
    //     var account_two_starting_balance;
    //     var account_one_ending_balance;
    //     var account_two_ending_balance;
    //
    //     var amount = 100;
    //
    //     return MetaCoin.deployed().then(function(instance) {
    //         meta = instance;
    //         return meta.getSharedBalance.call(account_one);
    //     }).then(function(sharedBalance) {
    //         account_one_starting_balance = sharedBalance.toNumber();
    //         //console.log(account_one_starting_balance);
    //     }).then(function() {
    //         return meta.getBalance.call(account_one);
    //     }).then(function(balance) {
    //         account_two_starting_balance = balance.toNumber();
    //         //console.log(account_two_starting_balance);
    //         return meta.withdrawFromSharedBalance(amount);
    //     }).then(function() {
    //         return meta.getBalance.call(account_one);
    //     }).then(function(balance) {
    //         account_two_ending_balance = balance.toNumber();
    //         //console.log(account_two_ending_balance);
    //         return meta.getSharedBalance.call(account_one);
    //     }).then(function(sharedBalance) {
    //         account_one_ending_balance = sharedBalance.toNumber();
    //         //console.log(account_one_ending_balance);
    //
    //         assert.equal(account_one_starting_balance, account_one_ending_balance + amount, "Owner wasn't abe to withdraw coin");
    //         assert.equal(account_two_starting_balance, account_two_ending_balance - amount, "Owner wasn't abe to withdraw coin");
    //     });
    // });
    //
    // it("Member should be allowed to withdraw money from shared balance", function() {
    //     var meta;
    //
    //     // var account_one = accounts[0];
    //     var account_two = accounts[1];
    //
    //     var account_one_starting_balance;
    //     var account_two_starting_balance;
    //     var account_one_ending_balance;
    //     var account_two_ending_balance;
    //
    //     var amount = 100;
    //
    //     return MetaCoin.deployed().then(function(instance) {
    //         meta = instance;
    //         return meta.getSharedBalance.call(account_two);
    //     }).then(function(sharedBalance) {
    //         account_one_starting_balance = sharedBalance.toNumber();
    //         //console.log("Starting Shared Amount :" + account_one_starting_balance);
    //     }).then(function() {
    //         return meta.getBalance.call(account_two);
    //     }).then(function(balance) {
    //         account_two_starting_balance = balance.toNumber();
    //         //console.log("Starting Personal Amount :" + account_two_starting_balance);
    //         return meta.withdrawFromSharedBalance(amount,{from:account_two});
    //     }).then(function() {
    //         return meta.getBalance.call(account_two);
    //     }).then(function(balance) {
    //         account_two_ending_balance = balance.toNumber();
    //         //console.log("Ending Personal Amount :" + account_two_ending_balance);
    //         return meta.getSharedBalance.call(account_two);
    //     }).then(function(sharedBalance) {
    //         account_one_ending_balance = sharedBalance.toNumber();
    //         //console.log("Ending Shared Amount :" + account_one_ending_balance);
    //
    //         assert.equal(account_one_starting_balance, account_one_ending_balance + amount, "Member wasn't abe to withdraw coin");
    //         assert.equal(account_two_starting_balance, account_two_ending_balance - amount, "Member wasn't abe to withdraw coin");
    //     });
    // });
});
