const Migrations = artifacts.require("Smarttoken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
