// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

contract Box {
    uint256 public val;

    // constructor(uint256 _val){
    //     val = _val;
    // }

    function initialize(uint256 _val) external {
        val = _val;
    }
}
