// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract tokenB  is ERC20 {
          address private owner;
          constructor(uint256 initialSupply) ERC20("tokenB", "B") {
          _mint(msg.sender,initialSupply);
           owner = msg.sender;
    }
    function mint(address to , uint amount) public {
        require(owner == msg.sender ," only owner can mint");
        _mint(to, amount);
    }

}