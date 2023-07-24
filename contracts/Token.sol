// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
  constructor() ERC20("My Token", "MYTOKEN") {
    _mint(msg.sender, 1_000_000 * 10 ** decimals());
  }

  function burn(uint256 amount) external {
    _burn(msg.sender, amount);
  }
}
