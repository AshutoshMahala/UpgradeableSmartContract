pragma solidity ^0.4.24;

import "./Proxy.sol";
import "./UpgradeabilityStorage.sol";

contract UpgradeabilityProxy is Proxy, UpgradeabilityStorage{


    constructor(address _impl, string _version) public {
        register = Registry(msg.sender);
        admin = msg.sender;
        register.addVersion(_version, _impl);
        _implementation = register.getVersion(_version);
    }

    function upgradeTo(address _new_impl, string _version) external adminOnly {
        register.addVersion(_version, _new_impl);
        _implementation = register.getVersion(_version);
    }

    function transferOwnership(address _new_owner) external adminOnly {
        admin = _new_owner;
        register.updateAdmin(_new_owner);
    }

    function getLatestInstanceVersion() external view adminOnly returns (string){
        return register.getLatestVersion();
    }

}
