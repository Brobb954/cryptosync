import { Alchemy, Network } from "alchemy-sdk";
// Optional config object, but defaults to the API key 'demo' and Network 'eth-mainnet'.
const settings = {
  apiKey: process.env.BASE_API_KEY, // Replace with your Alchemy API key.
  network: Network.BASE_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

const fetchBaseTokens = async (userAddress: string) => {
  // Wallet address -- replace with your desired address
  const address = userAddress;

  // Get token balances with API endpoint
  const balances = await alchemy.core.getTokenBalances(address);

  const nonZeroBalances = balances.tokenBalances.filter((token) => {
    return token.tokenBalance !== "0";
  });
  console.log(`Token balances of ${address} \n`);

  // Counter for SNo of final output
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const i = 1;

  // Loop through all tokens with non-zero balance
  for (const token of nonZeroBalances) {
    // Get balance of token
    let balance = Number(token.tokenBalance);
    // Get metadata of token with API endpoint
    const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);
    if (metadata.decimals === null) return;
    // Compute token balance in human-readable format
    balance = balance / Math.pow(10, metadata.decimals);
    const balanceStr = balance.toFixed(2);

    // Print name, balance, and symbol of token
    console.log("Name:", metadata.name);
    console.log("Balance", balanceStr);
    console.log("Symbol:", metadata.symbol);
    console.log("----------------------------------");
  }
};

export default fetchBaseTokens;
