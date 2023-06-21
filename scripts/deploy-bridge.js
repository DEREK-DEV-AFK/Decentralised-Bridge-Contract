const hre = require("hardhat");

async function main() {
    const [admin, other] = await hre.ethers.getSigners();

    const BridgeContract = await hre.ethers.getContractFactory("bridgeContract");
    const bridgeContract = await BridgeContract.deploy(other.address);

    await bridgeContract.deployed();

    console.log("bridge contract deployed at ", bridgeContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});