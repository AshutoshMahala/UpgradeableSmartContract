var BigNumber = require('bignumber.js');
var IRegistry = artifacts.require("./IRegistry.sol");
var Registry = artifacts.require("./Registry.sol");
var Proxy = artifacts.require("./UpgradeabilityProxy.sol");
var UpgradeabilityStorage = artifacts.require("./UpgradeabilityStorage.sol");
var UpgradeabilityProxy = artifacts.require("./UpgradeabilityProxy.sol");
var Upgradeable = artifacts.require("./Upgradeable.sol");
var TokenOne = artifacts.require("./TokenOne.sol");
var abi = require('ethereumjs-abi');

contract('UpgradeabilityProxy', function(accounts){
    var tokenv1_instace;
    var reg_instance;
    var upgrad_proxy;
    it('16. Initiate Proxy and attempt transfer',  function(){
        Registry.new({from: accounts[0]}).then(function (value1) {
            reg_instance = value1;
            return TokenOne.new(1000, {from: accounts[0]});
        }).then( function(value){
            tokenv1_instace = value;
            return UpgradeabilityProxy.new(tokenv1_instace.address, '1.0', {from: accounts[0]});
        }).then( function (value) {
            upgrad_proxy = value;
            return upgrad_proxy.implementation({from: accounts[0]});
        }).then( function (value) {
            // console.log("Contract version: "+ value);
            assert.equal(value.valueOf(), tokenv1_instace.address, "Instance address not equal");
        });
    });
});