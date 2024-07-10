// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTcreate is ERC721{
    uint256 public tokenCounter;

    constructor() ERC721("NFTcreate", "NFTc") {
        tokenCounter = 0;
    }

    function createNFT(address recipient) public onlyOwner returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        tokenCounter += 1;
        return newTokenId;
    }
}
