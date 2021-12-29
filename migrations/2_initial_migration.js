const Auction = artifacts.require("AdvertisementAuction");

module.exports = function (deployer) {
  deployer.deploy(Auction);
};
