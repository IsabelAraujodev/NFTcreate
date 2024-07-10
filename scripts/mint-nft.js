async function main() {
    const [deployer] = await ethers.getSigners();
    const contractAddress = "YOUR_CONTRACT_ADDRESS";
    const NFTcreate = await ethers.getContractFactory("NFTcreate");
    const nftCreate = NFTcreate.attach(contractAddress);
  
    const tx = await nftCreate.createNFT(deployer.address);
    await tx.wait();
    console.log("NFT minted to:", deployer.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  