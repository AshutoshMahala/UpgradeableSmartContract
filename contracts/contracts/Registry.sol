pragma solidity ^0.4.24;

import "./IRegistry.sol";

contract Registry is IRegistry{

    mapping (string => address) internal versions;

    string internal latestVersion;

    address internal admin;

    modifier adminOnly() {
        require(msg.sender == admin);
        _;
    }

    constructor () public{
        admin = msg.sender;
    }

    function addVersion(string version, address implementation) public adminOnly{
        require(versions[version] == 0x0);
        versions[version] = implementation;
        emit VersionAdded(version, implementation);
    }

    function getVersion(string version) public view returns (address) {
        return versions[version];
    }

    function updateAdmin(address _new_admin) external adminOnly {
        admin = _new_admin;
    }

    function getLatestVersion() external view adminOnly returns (string){
        return latestVersion;
    }

}
