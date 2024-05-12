import type { CryptoTypes } from "./crypto";

const fetchBscBalance = async (userAddress: string) => {
  const url = `https://api.bscscan.com/api
   ?module=account
   &action=balance
   &address=${userAddress}
   &apikey=${process.env.BSC_API_KEY}`;

  const response = await fetch(url);

  const result: CryptoTypes.BSCResponse =
    (await response.json()) as CryptoTypes.BSCResponse;

  console.log("BSC Balance: ", result.result * Math.pow(10, -18));
};

export default fetchBscBalance;
