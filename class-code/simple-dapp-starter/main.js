const provider = new ethers.providers.Web3Provider(window.ethereum);

// the person signed into metamask is the 'signer'
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, provider);