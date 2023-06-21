const hre = require("hardhat");

async function main() {
    const [admin, other] = await hre.ethers.getSigners();

    const TokenContract = await hre.ethers.getContractFactory("MyToken");
    const tokenContract = await TokenContract.deploy();

    await tokenContract.deployed();

    console.log("token contract deployed at ", tokenContract.address);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});