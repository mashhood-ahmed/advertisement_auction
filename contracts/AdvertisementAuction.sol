// SPDX-License-Identifier: MIT
// solium-disable linebreak-style
pragma solidity >= 0.4.22 < 0.9.0;

contract AdvertisementAuction {
    uint amount;
    string image;
    string text;
    address contract_onwer;
    address advrt_owner;

    constructor() {
        amount = 0;
        image = "Advertisement Auction Image";
        text = "Advertisement Auction Text";
        contract_onwer = msg.sender;
    }

    function set_advertisement_data(uint _amount, string calldata _image, string calldata _text) public {
        require(_amount > amount, "Sorry! we can't advertise you.");
        amount = _amount;
        image = _image;
        text = _text;
    }

    function get_advertisement_data() public view returns(string memory, string memory) {
        return(image, text);
    }

    function get_advertisement_image() public view returns(string memory) {
        return image;
    }

    function get_advertisement_text() public view returns(string memory) {
        return text;
    }

    function get_contract_owner_addr() public view returns(address) {
        return contract_onwer;
    }

    function get_advertisement_amount() public view returns(uint) {
        return amount;
    }

}