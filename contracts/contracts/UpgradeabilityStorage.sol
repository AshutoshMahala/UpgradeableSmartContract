pragma solidity ^0.4.24;

import "./Registry.sol";

contract UpgradeabilityStorage {

    Registry internal register;
    address internal admin;
    address internal _implementation;

    modifier adminOnly() {
        require(msg.sender == admin);
        _;
    }

    function implementation() public view returns (address) {
        return _implementation;
    }

}
