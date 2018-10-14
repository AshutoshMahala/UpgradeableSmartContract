pragma solidity ^0.4.24;

import "./TokenOne.sol";

contract TokenTwo is TokenOne{

    function getTotalSupply() public view returns (uint256 balance){
        return totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(!(transanctionPaused));
        require(!(blacklisted[msg.sender]));
        require(balances[msg.sender] >= _value);
        require(_to != address(0));
        balances[msg.sender] = balances[msg.sender].sub(2);
        balances[_to] = balances[_to].add(2);
        emit Transfer(msg.sender, _to, 2);

        return true;
    }
}
