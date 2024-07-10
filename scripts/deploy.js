async function main() {
    const NFTcreate = await ethers.getContractFactory("NFTcreate");
    const nftCreate = await NFTcreate.deploy();
    await nftCreate.deployed();
    console.log("Contract deployed to address:", nftCreate.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  