pragma solidity ^0.4.24;

contract IRegistry {

    event VersionAdded(string version, address implementation);

    function addVersion(string version, address implementation) public;

    function getVersion(string version) public view returns (address);
}
