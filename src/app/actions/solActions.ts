import type { CryptoTypes } from "./crypto";

const fetchSolTokens = async (userAddress: string) => {
  const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.SOL_API_KEY}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "my-id",
      method: "getAssetsByOwner",
      params: {
        ownerAddress: userAddress,
        page: 1, // Starts at 1
        limit: 1000,
        displayOptions: {
          showFungible: true, //return both fungible and non-fungible tokens
          showNonFungible: false,
          showNativeBalance: true,
        },
      },
    }),
  });
  const result: CryptoTypes.FetchSolTokensResponse =
    (await response.json()) as CryptoTypes.FetchSolTokensResponse;
  console.log("Assets by Owner: ", result.items);
};
export default fetchSolTokens;
