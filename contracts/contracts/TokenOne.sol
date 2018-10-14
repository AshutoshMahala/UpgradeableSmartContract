pragma solidity ^0.4.24;

import "./SafeMath.sol";
import "./Upgradeable.sol";

contract TokenOne is Upgradeable{

    using SafeMath for uint256;
    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowed;
    bool transanctionPaused = false;
    mapping (address => bool) public blacklisted;


    constructor ( uint256 _initialAmount) public {
        admin = msg.sender;
        balances[msg.sender] = _initialAmount;
        totalSupply = _initialAmount;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(!(transanctionPaused));
        require(!(blacklisted[msg.sender]));
        require(balances[msg.sender] >= _value);
        require(_to != address(0));
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    function balanceOf(address _owner) public view returns (uint256 balance){
        return balances[_owner];
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){
        require(!(transanctionPaused));
        require(!(blacklisted[msg.sender]));
        require(allowed[_from][msg.sender] >= _value);
        require(_to != address(0));
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        balances[_from] = balances[_from].sub(_value);
        balances[_to] = balances[_to].add(_value);

        emit Transfer (_from, _to, _value);

        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success){
        require(!(transanctionPaused));
        require(!(blacklisted[msg.sender]));
        require(_spender != address(0));
        allowed[msg.sender][_spender] = _value;

        emit Approval ( msg.sender, _spender, _value);

        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining){
        return allowed[_owner][_spender];
    }

    function pauseAllTransactions(bool _pause) external adminOnly {
        transanctionPaused = _pause;
    }

    function blacklist(address _address, bool blocked) external adminOnly {
        blacklisted[_address] = blocked;
    }
}
